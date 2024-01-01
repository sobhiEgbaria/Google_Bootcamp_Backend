"use strict";
class RequestHandler {
    sendRequest(method, url, body) {
        console.log(`Request sent: ${method} ${url} ${body}`);
    }
}
class RequestHandlerProxy {
    constructor(realApi) {
        this.realApi = realApi;
    }
    logRequest(method, url, body) {
        console.log(`Request logged: ${method} ${url} ${body}`);
    }
    validateRequestUrl(url) {
        return url.startsWith('/api');
    }
    sendRequest(method, url, body) {
        if (this.validateRequestUrl(url)) {
            this.realApi.sendRequest(method, url, body);
            this.logRequest(method, url, body);
        }
    }
}
// Use case
const realRequestHandler = new RequestHandler();
const proxyRequestHandler = new RequestHandlerProxy(realRequestHandler);
proxyRequestHandler.sendRequest('GET', '/api/users');
