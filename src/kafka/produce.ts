import { KafkaProducer } from "./kafka-producer";
const kafkaProducer = new KafkaProducer(["localhost:29092"]);

(async () => {

    await kafkaProducer.send("my-topic", "fc");
    await kafkaProducer.disconnect();
})();