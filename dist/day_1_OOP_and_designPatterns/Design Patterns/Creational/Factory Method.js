"use strict";
var PaymentType;
(function (PaymentType) {
    PaymentType["Paypal"] = "PAYPAL";
    PaymentType["Bitcoin"] = "BITCOIN";
    PaymentType["VisaCard"] = "VISA_CARD";
})(PaymentType || (PaymentType = {}));
class PaymentService {
}
class Paypal extends PaymentService {
    payMoney(amount) {
        console.log(`You paid ${amount} dollars by Paypal.`);
    }
}
class Bitcoin extends PaymentService {
    payMoney(amount) {
        console.log(`You paid ${amount} dollars by Bitcoin.`);
    }
}
class VisaCard extends PaymentService {
    payMoney(amount) {
        console.log(`You paid ${amount} dollars by VisaCard.`);
    }
}
class PaymentFactory {
}
class PaypalFactory extends PaymentFactory {
    createService() {
        return new Paypal();
    }
}
class BitcoinFactory extends PaymentFactory {
    createService() {
        return new Bitcoin();
    }
}
class VisaCardFactory extends PaymentFactory {
    createService() {
        return new VisaCard();
    }
}
/************************** Business logic layer **************************/
function getPaymentFactory(paymentType) {
    switch (paymentType) {
        case PaymentType.Paypal:
            return new PaypalFactory();
        case PaymentType.Bitcoin:
            return new BitcoinFactory();
        case PaymentType.VisaCard:
            return new VisaCardFactory();
        default:
            throw new Error("Invalid payment type.");
    }
}
const paypalService = getPaymentFactory(PaymentType.Paypal).createService();
paypalService.payMoney(100); // You paid 100 dollars by Paypal.
const bitcoinService = getPaymentFactory(PaymentType.Bitcoin).createService();
bitcoinService.payMoney(200); // You paid 200 dollars by Bitcoin.
const visaCardService = getPaymentFactory(PaymentType.VisaCard).createService();
visaCardService.payMoney(300); // You paid 300 dollars by VisaCard.
