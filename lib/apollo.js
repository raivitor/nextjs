import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';

const link = createHttpLink({ uri: 'https://api.graph.cool/simple/v1/cjda7f4n004ix0109uax2tjgf', fetch: fetch });

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
  ssrMode: false
});

export default client;