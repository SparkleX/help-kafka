# server.properties
```
listeners=SASL_PLAINTEXT://0.0.0.0:9092,CONTROLLER://0.0.0.0:9093
inter.broker.listener.name=SASL_PLAINTEXT
inter.broker.protocol=SASL_PLAINTEXT
advertised.listeners=SASL_PLAINTEXT://localhost:9092
sasl.mechanism.inter.broker.protocol=PLAIN
sasl.enabled.mechanisms=PLAIN
```

# consumer.properties producer.properties
```
security.protocol=SASL_PLAINTEXT
sasl.mechanism=PLAIN
```

# jaas.conf
```
KafkaServer {
	org.apache.kafka.common.security.plain.PlainLoginModule required
	username="admin"
	password="admin"
	user_admin="admin"
	user_alice="pwd";
	};


KafkaClient {
	org.apache.kafka.common.security.plain.PlainLoginModule required
	username="admin"
	password="admin";
	};
```
# before start server
```
export KAFKA_OPTS=-Djava.security.auth.login.config=/opt/kafka/config/jaas.conf
```
# kafka-console-producer / kafka-console-consumer
```
if [ "x$KAFKA_OPTS" ]; then
    export KAFKA_OPTS="-Djava.security.auth.login.config=/opt/kafka/config/client_jaas.conf"
fi
```