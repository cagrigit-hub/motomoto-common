export declare class KafkaProvider {
    private kafka;
    private producer;
    constructor(brokers: string[]);
    send(topic: string, message: any): Promise<void>;
    disconnect(): Promise<void>;
}
