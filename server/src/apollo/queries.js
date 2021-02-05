"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRACKING_BALANCE = void 0;
var apollo_server_1 = require("apollo-server");
exports.TRACKING_BALANCE = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nquery (\n  $address: String!\n) {\n  ethereum(network: bsc) {\n    address(address: {is: $address}) {\n      balances {\n        currency {\n          address\n          name\n          symbol\n          decimals\n          tokenType\n        }\n        value\n      }\n    }\n  }\n}\n"], ["\nquery (\n  $address: String!\n) {\n  ethereum(network: bsc) {\n    address(address: {is: $address}) {\n      balances {\n        currency {\n          address\n          name\n          symbol\n          decimals\n          tokenType\n        }\n        value\n      }\n    }\n  }\n}\n"])));
var templateObject_1;
