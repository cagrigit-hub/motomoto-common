import { KafkaConsumer } from "./kafka-consumer";


const kafkaConsumer = new KafkaConsumer("my-group", ["localhost:29092"]);

// Add a small delay before starting the consumer
setTimeout(async () => {
    await kafkaConsumer.connect();

    await kafkaConsumer.subscribe("my-topic", async (payload) => {
        console.log(`Received message MT1: ${payload.message.value!.toString()}`);
    }, true);
    await kafkaConsumer.subscribe("my-topic-2", async (payload) => {
        console.log(`Received message MT2: ${payload.message.value!.toString()}`);
    }, false);
    await kafkaConsumer.subscribe("my-topic-3", async (payload) => {
        console.log(`Received message MT3: ${payload.message.value!.toString()}`);
    }, true);

    await kafkaConsumer.run();
}, 2000); // Delay consumer start by 2 seconds








