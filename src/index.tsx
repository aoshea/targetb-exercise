import * as React from "react";
import { render } from "react-dom";
import { ApolloClient, ApolloProvider, gql } from "@apollo/client";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./theme";
import { cache } from "./cache";
import { typeDefs, resolvers } from "./typedefs";

import { App } from "./App";

const client = new ApolloClient({
  cache,
  typeDefs,
  resolvers,
  connectToDevTools: true,
});

render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("container")
);
