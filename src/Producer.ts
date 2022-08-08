import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
})

const producer = kafka.producer()

async function run() {
    await producer.connect()
    await producer.send({
        topic: 'foo',
        messages: [
            { value: 'Hello KafkaJS user!' },
        ],
    });
    await producer.disconnect();
}

run();