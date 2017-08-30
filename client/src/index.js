import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router";
import {
  ApolloProvider,
  createNetworkInterface,
  ApolloClient
} from "react-apollo";

import registerServiceWorker from "./utils/registerServiceWorker";
import "./index.css";
import App from "./App";

//TODO: Get GraphQL endpoint after talk to Maria about Graphcool use
const networkInterface = createNetworkInterface({ uri: "PLACEHOLDER" });
const client = new ApolloClient({ networkInterface });

render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();
