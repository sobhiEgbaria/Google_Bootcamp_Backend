"use strict";
class ResponseHandler {
    process(response) {
        return response;
    }
    setNext(ResponseHandler) {
        this.nextHandler = ResponseHandler;
        return ResponseHandler;
    }
    handle(response) {
        const processedResponse = this.process(response);
        if (this.nextHandler != null) {
            return this.nextHandler.handle(processedResponse);
        }
        else {
            return processedResponse;
        }
    }
}
class Encryptor extends ResponseHandler {
    encryptTokens(response) {
        const { authentication } = response;
        const encryptedAuthTokens = {};
        for (const key in authentication) {
            encryptedAuthTokens[key] = `encrypted-${authentication[key]}`;
        }
        return Object.assign(Object.assign({}, response), { authentication: encryptedAuthTokens });
    }
    process(response) {
        const encryptedResponse = this.encryptTokens(response);
        return encryptedResponse;
    }
}
class BodyFormatter extends ResponseHandler {
    transformKeysToCamelCase(body) {
        const newBody = {};
        for (const key in body) {
            const camelCaseKey = key.replace(/_([a-z])/g, (subString) => subString[1].toUpperCase());
            newBody[camelCaseKey] = body[key];
        }
        return newBody;
    }
    process(response) {
        const clonedResponseBody = JSON.parse(JSON.stringify(response.body));
        const formattedBody = this.transformKeysToCamelCase(clonedResponseBody);
        const formattedResponse = Object.assign(Object.assign({}, response), { body: formattedBody });
        return formattedResponse;
    }
}
class MetadataAdder extends ResponseHandler {
    getResponseMetadata(statusCode) {
        if (statusCode < 200)
            return "Informational";
        else if (statusCode < 300)
            return "Success";
        else if (statusCode < 400)
            return "Redirection";
        else if (statusCode < 500)
            return "Client Error";
        else
            return "Server Error";
    }
    process(response) {
        const updatedResponse = Object.assign(Object.assign({}, response), { message: this.getResponseMetadata(response.statusCode) });
        return updatedResponse;
    }
}
// Use case
const response = {
    statusCode: 200,
    body: {
        design_pattern_name: "Chain of Responsibility",
        pattern_category: "Behavioral",
        complexity_percentage: 80,
    },
    authentication: {
        api_token: "12345678",
        refresh_token: "ABCDEFGH",
    },
};
const responseHandler = new ResponseHandler();
const encryptor = new Encryptor();
const bodyFormatter = new BodyFormatter();
const metadataAdder = new MetadataAdder();
responseHandler
    .setNext(encryptor)
    .setNext(bodyFormatter)
    .setNext(metadataAdder);
const resultResponse = responseHandler.handle(response);
console.log(resultResponse);
