"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaConsumer = void 0;
const kafkajs_1 = require("kafkajs");
class KafkaConsumer {
    constructor(brokers, groupId) {
        this.kafka = new kafkajs_1.Kafka({ brokers });
        this.consumer = this.kafka.consumer({ groupId });
    }
    subscribe(topic, eachMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.consumer.connect();
            yield this.consumer.subscribe({ topic, fromBeginning: true });
            yield this.consumer.run({
                eachMessage,
            });
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.consumer.disconnect();
        });
    }
}
exports.KafkaConsumer = KafkaConsumer;
