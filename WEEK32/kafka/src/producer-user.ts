// Partitioning strategy
//**** When producing messages, you can assign a key that uniquely identifies the event. ****

// Kafka will hash this key and use the hash to determine the partition. This ensures that all messages with the same key (lets say for the same user) are sent to the same partition.

/*

Why would you want messages from the same user to go to the same partition?
Lets say a single user has too many notifications, this way you can make sure they only choke a single partition and not all the partitions */

import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["localhost:9092"]
})

const producer = kafka.producer();

async function main() {
    await producer.connect();
    await producer.send({
        topic: "payment-done",
        messages: [{
            value: "hi there",
            key: "user1"
        }]
    });
}

main();


// npm run produce:user