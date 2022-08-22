import kafka from 'kafka-node'
import { ConsumerGroup, Consumer } from 'kafka-node'
/*const client = new kafka.KafkaClient({kafkaHost: '127.0.0.1:9092'});
const consumer = new Consumer(
    client,
    [
        { topic: 'test.topic',partition: 0 },
        { topic: 'test.topic',partition: 1 }
    ],
    {
        autoCommit: false
    }
);
consumer.on('message', function (message) {
    console.log(message);
});*/


const options = {
    kafkaHost: 'localhost:9092',
    groupId: '1',
    sessionTimeout: 15000,
    protocol: ['roundrobin']
  };
   
  var consumerGroup = new ConsumerGroup(options, 'test.topic');
  consumerGroup.on('message', function (message) {
    console.log(message);
});
   
