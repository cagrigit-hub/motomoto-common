import { Kafka, Consumer, EachMessagePayload } from 'kafkajs';

export class KafkaConsumer {
  private consumer: Consumer;

  constructor(topic: string, groupId: string, brokers: string[]) {
    const kafka = new Kafka({ brokers });
    this.consumer = kafka.consumer({ groupId });

    this.runConsumer(topic);
  }

  async runConsumer(topic: string) {
    await this.consumer.connect();
    await this.consumer.subscribe({ topic, fromBeginning: true });

    await this.consumer.run({
      eachMessage: async (payload: EachMessagePayload) => {
        const messageContent = payload.message.value?.toString();
        console.log(`Received message: ${messageContent}`);
      },
    });
  }

  async disconnect() {
    await this.consumer.disconnect();
  }
}

