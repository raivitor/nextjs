import Layout from '../components/header.js'
import Login from '../components/login.js'
import { ApolloProvider } from 'react-apollo';
import apolloClient from '../lib/apollo'

export default () => (
  <ApolloProvider client={apolloClient}>
    <Layout>
      <Login/>
    </Layout>
  </ApolloProvider>
)