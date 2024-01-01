"use strict";
class TelegramApi {
    connect() {
        console.log("You are connected to Telegram API!");
    }
    send(targetId, message) {
        console.log(message + " sent to " + targetId + " by Telegram!");
    }
}
class WhatsappApi {
    connect() {
        console.log("You are connected to Whatsapp API!");
    }
    send(targetId, message) {
        console.log(message + " sent to " + targetId + " by Whatsapp!");
    }
}
class SignalApi {
    connect() {
        console.log("You are connected to Signal API!");
    }
    send(targetId, message) {
        console.log(message + " sent to " + targetId + " by Signal!");
    }
}
class Messenger {
    constructor(api) {
        this.api = api;
    }
    sendMessage(targetId, message) {
        this.api.connect();
        this.api.send(targetId, message);
    }
}
