import Layout from '../components/Header.js'
import Login from '../container/login.js'
import { ApolloProvider } from 'react-apollo';
import apolloClient from '../lib/apollo'

export default () => (
  <ApolloProvider client={apolloClient}>
    <Layout>
      <Login/>
    </Layout>
  </ApolloProvider>
)
