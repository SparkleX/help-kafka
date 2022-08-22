import { Kafka, ConsumerConfig, PartitionAssigners, AssignerProtocol, PartitionAssigner } from 'kafkajs';
const kafka = new Kafka({
    clientId: 'test-app',
    brokers: ['localhost:9092']/*,
    ssl: false,
    sasl: {
        mechanism: 'plain',
        username: 'admin',
        password: 'admin'
    }*/
})

const consumer = kafka.consumer({ groupId: '1'})

const run = async () => {

    // Consuming
    await consumer.connect()
    await consumer.subscribe({ 
        topic: 'test.topic'
    });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                partition,
                offset: message.offset,
                value: message.value.toString(),
            })
        },
    })
}

run().catch(console.error)