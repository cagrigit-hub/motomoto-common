import { EachMessagePayload } from 'kafkajs';
export declare class KafkaConsumer {
    private kafka;
    private consumer;
    constructor(brokers: string[], groupId: string);
    subscribe(topic: string, eachMessage: (message: EachMessagePayload) => Promise<void>): Promise<void>;
    disconnect(): Promise<void>;
}
