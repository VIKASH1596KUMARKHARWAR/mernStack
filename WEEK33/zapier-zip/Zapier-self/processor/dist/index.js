"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const kafkajs_1 = require("kafkajs");
const TOPIC_NAME = 'zapier-event';
const client = new client_1.PrismaClient();
const kafkaClient = new kafkajs_1.Kafka({
    clientId: 'outbox-processor',
    brokers: ['localhost:9092'],
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const producer = kafkaClient.producer();
        yield producer.connect();
        try {
            while (true) {
                // Fetch 10 pending rows from the zapRunOutbox table
                const pendingRows = yield client.zapRunOutbox.findMany({
                    where: {},
                    take: 10, // Fetch 10 rows at a time
                });
                // If there are no pending rows, wait for a while before retrying
                if (pendingRows.length === 0) {
                    console.log('No pending rows, waiting...');
                    yield new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds
                    continue;
                }
                // Prepare the messages
                const messages = pendingRows.map(r => ({
                    value: r.zapRunId.toString(), // Make sure zapRunId is sent as a string
                }));
                // Log the messages to be sent to Kafka
                console.log('Messages to be sent to Kafka:', messages);
                // Send the messages to Kafka
                const response = yield producer.send({
                    topic: TOPIC_NAME,
                    messages,
                });
                console.log(`Sent ${pendingRows.length} messages to Kafka`);
                // Log the Kafka response
                console.log('Kafka send response:', response);
                // Mark these rows as processed or delete them after sending
                yield client.zapRunOutbox.deleteMany({
                    where: {
                        id: { in: pendingRows.map(x => x.id) }
                    }
                });
                console.log('Deleted processed rows from zapRunOutbox');
            }
        }
        catch (error) {
            console.error('Error processing the Kafka messages:', error);
        }
        finally {
            yield producer.disconnect();
            console.log('Kafka producer disconnected');
        }
    });
}
main().catch(console.error);
