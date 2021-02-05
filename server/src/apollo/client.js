"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bitQueryClient = void 0;
var cross_fetch_1 = __importDefault(require("cross-fetch"));
var client_1 = require("@apollo/client");
exports.bitQueryClient = new client_1.ApolloClient({
    link: new client_1.HttpLink({ uri: 'https://graphql.bitquery.io', fetch: cross_fetch_1.default }),
    cache: new client_1.InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    ethereum: {
                        merge: true,
                    }
                }
            }
        }
    }),
});
