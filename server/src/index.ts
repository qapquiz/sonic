import { ApolloServer, MockList, gql } from 'apollo-server';

const typeDefs = gql`
    type Query {
        "Query to get user by address"
        user(id: ID!): User
    }

    "User is a someone who hold the wallet"
    type User {
        "User's wallet address"
        id: ID!
        balances: [Currency]
    }

    "Currency is a token that user have with can be Native or ERC20"
    type Currency {
        "Currency's address"
        id: ID!
        "Currency's address"
        address: String
        "Currency's name e.g. Ethereum, Pancake"
        name: String!
        "Currency's symbol e.g. ETH, BNB, CAKE"
        symbol: String!
        "Currency's price per token"
        price: String!
        "Amount of token that user have"
        value: String!
        "Currency's type 'ERC20'"
        tokenType: String
        "Currency's logo"
        symbolUrl: String
    }
`;

const mocks = {
    User: () => ({
        id: () => '0x13f15A0Cf049d75800D22DA32fEE09A2612F8Faf',
        balances: () => new MockList([2, 6]),
    }),

    Currency: () => ({
        id: () => '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
        address: () => '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
        name: () => 'Pancake',
        symbol: () => 'CAKE',
        price: () => '2.6',
        value: () => '20.123131221',
        symbolUrl: () => 'https://raw.githubusercontent.com/pancakeswap/pancake-frontend/develop/public/images/cake.svg'
    }),
}

const server = new ApolloServer({ typeDefs, mocks });

server.listen().then(() => {
    console.log(`
        🚀  Server is running!
        🔉  Listening on port 4000
        📭  Query at https://studio.apollographql.com/dev
    `);
});