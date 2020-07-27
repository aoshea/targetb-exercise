import { gql } from "@apollo/client";

export const GET_MESSAGE = gql`
  query GetMessage {
    message @client {
      id
      text
    }
  }
`;

export const MESSAGE_OUTPUT = gql`
  query messageOutput {
    messageOutput @client {
      id @client
      text @client
    }
  }
`;