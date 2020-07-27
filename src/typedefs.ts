
import { gql } from "@apollo/client";

const data = {
    "messageOutput": {
        id: 1,
        text: "Initial message",
        "__typename": "MessageOutput"
    }
}

export const typeDefs = gql`
    type MessageOutput {
        id: Int!
        text: String!
    }

    type Query {
        messageOutput: MessageOutput!
    }

    type Mutation {
        updateMessageOutput(text: String!): MessageOutput!
    }
`;

type DataProps = {
    text: string
}

export const resolvers = {
    Query: {
        messageOutput: () => data.messageOutput
    },
    Mutation: {
        updateMessageOutput: (_: any, args: DataProps) => {
            data.messageOutput.text = args.text
            return data.messageOutput;
        }
    } 
}