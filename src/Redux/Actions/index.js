// Setup Apollo Client dependencies
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:3000/"
});

const client = new ApolloClient({
  cache,
  link
});

// If you need to make a query to the backend, make the query like this:
// https://www.apollographql.com/docs/tutorial/client/#make-your-first-query
