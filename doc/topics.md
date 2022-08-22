```
kafka-topics.sh --bootstrap-server=localhost:9092 --list 
kafka-topics.sh --bootstrap-server=localhost:9092 --describe
kafka-topics.sh --bootstrap-server=localhost:9092 --create --topic test.topic  --replication-factor=1 --partitions=1
kafka-console-producer.sh --bootstrap-server=localhost:9092 --topic=test.topic
kafka-console-consumer.sh --bootstrap-server=localhost:9092 --topic=test.topic

kafka-topics.sh --bootstrap-server=localhost:9092 --alter --topic test.topic --partitions=2

kafka-console-consumer.sh --bootstrap-server=localhost:9092 --topic=test.topic --group=1
kafka-consumer-groups.sh --bootstrap-server=localhost:9092 --describe
```
