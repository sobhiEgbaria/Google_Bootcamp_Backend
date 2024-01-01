"use strict";
class TelegramApi {
    start() {
        console.log("You are connected to Telegram API!");
    }
    messageTo(targetId, message) {
        console.log(message + " sent to " + targetId + " by Telegram!");
    }
}
class WhatsappApi {
    setup() {
        console.log("You are connected to Whatsapp API!");
    }
    pushMessage(message, targetId) {
        console.log(message + " sent to " + targetId + " by Whatsapp!");
    }
}
class SignalApi {
    open() {
        console.log("You are connected to Signal API!");
    }
    postMessage(params) {
        console.log(params.text + " sent to " + params.id + " by Signal!");
    }
}
class Messenger {
    constructor(api) {
        this.api = api;
    }
    sendMessage(targetId, message) {
        if (this.api instanceof TelegramApi) {
            this.api.start();
            this.api.messageTo(targetId, message);
        }
        else if (this.api instanceof WhatsappApi) {
            this.api.setup();
            this.api.pushMessage(message, targetId);
        }
        else {
            this.api.open();
            this.api.postMessage({ id: targetId, text: message });
        }
    }
}
