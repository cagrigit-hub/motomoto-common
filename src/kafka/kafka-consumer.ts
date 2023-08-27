import { Kafka, Consumer, EachMessagePayload } from 'kafkajs';

export class KafkaConsumer {
  private consumer: Consumer;

  constructor(brokers: string[], groupId: string) {
    const kafka = new Kafka({ brokers });
    this.consumer = kafka.consumer({ groupId });

    this.consumer.run({
      eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
        // Handle incoming message
        const payload = JSON.parse(message.value?.toString()!);
        console.log(`Received message on topic ${topic}:`, payload);
      },
    });
  }

  async subscribe(topic: string) {
    await this.consumer.subscribe({ topic });
  }

  async disconnect() {
    await this.consumer.disconnect();
  }
}

