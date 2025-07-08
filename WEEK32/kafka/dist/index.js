"use strict";
// import { Kafka } from "kafkajs";
// const kafka = new Kafka({
//     clientId: "my-app",
//     brokers: ["localhost:9092"]
// })
// const producer = kafka.producer();
// const consumer = kafka.consumer({ groupId: "my-app3" });
// async function main() {
//     await producer.connect();
//     await producer.send({
//         topic: "quickstart-events",
//         messages: [{
//             value: "hello kafkaJs users from the nodeJS!"
//         }]
//     })
//     await consumer.connect();
//     await consumer.subscribe({
//         topic: "quickstart-events", fromBeginning: true
//     })
//     await consumer.run({
//         eachMessage: async ({ topic, partition, message }) => {
//             console.log({
//                 offset: message.offset,
//                 value: message?.value?.toString(),
//             })
//         },
//     })
// }
// main();
// lets break this in separated files// producer.ts and consumer.ts
/*
updta the package.json
"scripts": {
    "start": "tsc -b && node dist/index.js",
    "produce": "tsc -b && node dist/producer.js",
    "consume": "tsc -b && node dist/consumer.js"
}, */
// in this case only one out og the 3 consumer were getting the log rest were sitting ideal???
//answer lies in the consumer group
/*1. if same groupId : one of them will be pulling the info from the topic and rest will be idle
 */ 
