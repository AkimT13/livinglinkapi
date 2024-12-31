import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';


const typedefs = `#graphql

    type Room{

        id: ID!
        name: String!
        rent: float

    
    }






`

const resolvers = [

    {

    }

]

const app = new ApolloServer()