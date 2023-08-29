import { Kafka, Producer, ProducerRecord } from 'kafkajs';

export class KafkaProducer {
  private kafka: Kafka;
  private producer: Producer;

  constructor(brokers: string[]) {
    this.kafka = new Kafka({ brokers });
    this.producer = this.kafka.producer({
      allowAutoTopicCreation: false,
      transactionTimeout: 30000,
    });
  }

  async send(topic: string, message: any) {
    await this.producer.connect();
    const producerRecord: ProducerRecord = {
      topic,
      messages: [{ value: JSON.stringify(message) }],
    };

    await this.producer.send(producerRecord);
  }

  async disconnect() {
    await this.producer.disconnect();
  }
}

