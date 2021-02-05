"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var client_1 = require("./apollo/client");
var queries_1 = require("./apollo/queries");
var typeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Query {\n        \"Query to get user by address\"\n        user(id: ID!): User\n    }\n\n    \"User is a someone who hold the wallet\"\n    type User {\n        \"User's wallet address\"\n        id: ID!\n        balances: [Currency]\n    }\n\n    \"Currency is a token that user have with can be Native or ERC20\"\n    type Currency {\n        \"Currency's address\"\n        id: ID!\n        \"Currency's address\"\n        address: String!\n        \"Currency's name e.g. Ethereum, Pancake\"\n        name: String!\n        \"Currency's symbol e.g. ETH, BNB, CAKE\"\n        symbol: String!\n        \"Currency's decimal\"\n        decimals: Int!\n        \"Currency's price per token\"\n        price: String\n        \"Amount of token that user have\"\n        value: String!\n        \"Currency's type 'ERC20'\"\n        tokenType: String\n        \"Currency's logo\"\n        symbolUrl: String\n    }\n"], ["\n    type Query {\n        \"Query to get user by address\"\n        user(id: ID!): User\n    }\n\n    \"User is a someone who hold the wallet\"\n    type User {\n        \"User's wallet address\"\n        id: ID!\n        balances: [Currency]\n    }\n\n    \"Currency is a token that user have with can be Native or ERC20\"\n    type Currency {\n        \"Currency's address\"\n        id: ID!\n        \"Currency's address\"\n        address: String!\n        \"Currency's name e.g. Ethereum, Pancake\"\n        name: String!\n        \"Currency's symbol e.g. ETH, BNB, CAKE\"\n        symbol: String!\n        \"Currency's decimal\"\n        decimals: Int!\n        \"Currency's price per token\"\n        price: String\n        \"Amount of token that user have\"\n        value: String!\n        \"Currency's type 'ERC20'\"\n        tokenType: String\n        \"Currency's logo\"\n        symbolUrl: String\n    }\n"])));
var mocks = {
    User: function () { return ({
        id: function () { return '0x13f15A0Cf049d75800D22DA32fEE09A2612F8Faf'; },
        balances: function () { return new apollo_server_1.MockList([2, 6]); },
    }); },
    Currency: function () { return ({
        id: function () { return '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82'; },
        address: function () { return '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82'; },
        name: function () { return 'Pancake'; },
        symbol: function () { return 'CAKE'; },
        price: function () { return '2.6'; },
        value: function () { return '20.123131221'; },
        symbolUrl: function () { return 'https://raw.githubusercontent.com/pancakeswap/pancake-frontend/develop/public/images/cake.svg'; }
    }); },
};
var resolvers = {
    Query: {
        /**
         * @todo #1 need to define type of Response query from bitquery.io
         *  can find the define schema at https://explorer.bitquery.io/graphql/Sr4ksApTAT
        */
        user: function (parent, _a) {
            var id = _a.id;
            return __awaiter(void 0, void 0, void 0, function () {
                var _b, loading, error, data;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, client_1.bitQueryClient.query({
                                query: queries_1.TRACKING_BALANCE,
                                variables: {
                                    "limit": 10,
                                    "offset": 0,
                                    "network": "bsc",
                                    "address": id
                                }
                            })];
                        case 1:
                            _b = _c.sent(), loading = _b.loading, error = _b.error, data = _b.data;
                            return [2 /*return*/, {
                                    id: id,
                                    balances: data.ethereum.address[0].balances.map(function (balance) {
                                        return {
                                            id: balance.currency.address,
                                            address: balance.currency.address,
                                            name: balance.currency.name,
                                            symbol: balance.currency.symbol,
                                            decimals: balance.currency.decimals,
                                            value: balance.value,
                                        };
                                    }),
                                }];
                    }
                });
            });
        }
    },
};
var server = new apollo_server_1.ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
});
server.listen({ port: process.env.PORT || 4000 }).then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log("\n        \uD83D\uDE80  Server is running!\n        \uD83D\uDD09  Listening on port 4000\n        \uD83D\uDCED  Query at https://studio.apollographql.com/dev\n    ");
        return [2 /*return*/];
    });
}); });
var templateObject_1;
