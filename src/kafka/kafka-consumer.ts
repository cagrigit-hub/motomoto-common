import { Kafka, Consumer, EachMessagePayload } from 'kafkajs';

export class KafkaConsumer {
  private kafka: Kafka;
  private consumer: Consumer;

  constructor(brokers: string[], groupId: string) {
    this.kafka = new Kafka({ brokers });
    this.consumer = this.kafka.consumer({ groupId });
  }

  async subscribe(topic: string, eachMessage: (message: EachMessagePayload) => Promise<void>) {
    await this.consumer.connect();
    await this.consumer.subscribe({ topic, fromBeginning: true });

    await this.consumer.run({
      eachMessage,
    });
  }

  async disconnect() {
    await this.consumer.disconnect();
  }
}


