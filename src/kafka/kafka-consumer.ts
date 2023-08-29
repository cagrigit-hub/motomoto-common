import { Kafka, Consumer, EachMessagePayload } from 'kafkajs';

export class KafkaConsumer {
  private consumer: Consumer;
  private topicToCallback: Map<string, (payload: EachMessagePayload) => Promise<void>>;
  constructor(groupId: string, brokers: string[]) {
    const kafka = new Kafka({ brokers });
    this.consumer = kafka.consumer({ groupId });
    this.topicToCallback = new Map<string, (payload: EachMessagePayload) => Promise<void>>();
  }

  async connect() {
    await this.consumer.connect();
  }
  async subscribe(topic: string, callback: (payload: EachMessagePayload) => Promise<void>, fromBeginning: boolean) {
    await this.consumer.subscribe({ topic, fromBeginning });
    this.topicToCallback.set(topic, callback);
  }
  async run() {
    await this.consumer.run({
      eachMessage: async (payload) => {
        const callback = this.topicToCallback.get(payload.topic);
        if (callback) {
          await callback(payload);
        }
      },
    });
  }

  async disconnect() {
    await this.consumer.disconnect();
  }
}

