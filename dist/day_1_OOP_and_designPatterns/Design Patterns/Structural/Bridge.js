"use strict";
class Broker {
    constructor(accessToken) {
        this.accessToken = accessToken;
    }
}
class AlphaBroker extends Broker {
    getProfile() {
        /* Specific Implementation */
    }
    getBasket() {
        /* Specific Implementation */
    }
}
class BetaBroker extends Broker {
    getProfile() {
        /* Specific Implementation */
    }
    getBasket() {
        /* Specific Implementation */
    }
}
class StockExchangeMarket {
    constructor(broker) {
        this.broker = broker;
    }
}
class NewYorkStockExchange extends StockExchangeMarket {
    buyStock(stockId, amount) {
        /* Specific Implementation */
    }
    sellStock(stockId, amount) {
        /* Specific Implementation */
    }
    sellAllStocks() {
        /* Specific Implementation */
    }
}
class TokyoStockExchange extends StockExchangeMarket {
    buyStock(stockId, amount) {
        /* Specific Implementation */
    }
    sellStock(stockId, amount) {
        /* Specific Implementation */
    }
    sellAllStocks() {
        /* Specific Implementation */
    }
}
// Use Case
