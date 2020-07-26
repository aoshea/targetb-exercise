import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";
import { Message } from "./models";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        message: {
          read () {
            return messageVar();
          }
        }
      }
    }
  }
});

const messageInitialValue: Message = {
  id: 0,
  text: "Initial message"
};

export const messageVar: ReactiveVar<Message> = makeVar<Message>(
  messageInitialValue
);
