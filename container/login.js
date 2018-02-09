import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import { compose, withState, withHandlers, withProps, flattenProp } from 'recompose'
import gql from 'graphql-tag';
import Login from '../components/login.js'

export const LOGIN_QUERY = gql`
  query ($username: String!) {
    User(username: $username) {
      id
      username
    }
  }
`;

export default compose(
  graphql(LOGIN_QUERY, { options: { variables: { username: "" } } }),
  flattenProp('data'),
  withState('username', 'handleUsername', ''),
  withState('password', 'handlePassword', ''),
  withHandlers({
    submit: ({ username, refetch }) => e => {
      refetch({ username })
    }
  }),
  withProps(({ User }) => ({
    authenticaded: User !== null
  })),
)(Login)
