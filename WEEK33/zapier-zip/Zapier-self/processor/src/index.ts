import { PrismaClient } from '@prisma/client';
import { Kafka } from 'kafkajs';

const TOPIC_NAME = 'zapier-event';
const client = new PrismaClient();

const kafkaClient = new Kafka({
    clientId: 'outbox-processor',
    brokers: ['localhost:9092'],
});

async function main() {
    const producer = kafkaClient.producer();
    await producer.connect();

    try {
        while (true) {
            // Fetch 10 pending rows from the zapRunOutbox table
            const pendingRows = await client.zapRunOutbox.findMany({
                where: {},
                take: 10, // Fetch 10 rows at a time
            });

            // If there are no pending rows, wait for a while before retrying
            if (pendingRows.length === 0) {
                console.log('No pending rows, waiting...');
                await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds
                continue;
            }

            // Prepare the messages
            const messages = pendingRows.map(r => ({
                value: r.zapRunId.toString(), // Make sure zapRunId is sent as a string
            }));

            // Log the messages to be sent to Kafka
            console.log('Messages to be sent to Kafka:', messages);

            // Send the messages to Kafka
            const response = await producer.send({
                topic: TOPIC_NAME,
                messages,
            });

            console.log(`Sent ${pendingRows.length} messages to Kafka`);

            // Log the Kafka response
            console.log('Kafka send response:', response);

            // Mark these rows as processed or delete them after sending
            await client.zapRunOutbox.deleteMany({
                where: {
                    id: { in: pendingRows.map(x => x.id) }
                }
            });

            console.log('Deleted processed rows from zapRunOutbox');
        }
    } catch (error) {
        console.error('Error processing the Kafka messages:', error);
    } finally {
        await producer.disconnect();
        console.log('Kafka producer disconnected');
    }
}

main().catch(console.error);
