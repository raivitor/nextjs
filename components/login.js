import React, { Component, Fragment } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

export const LoginForm = ({
  username,
  handleUsername,
  password,
  handlePassword,
  submit,
  User
}) => (
  <Fragment>
    <h1>Login</h1>
    <div className="login-box">
      <h1 className="header-logo">Instagram</h1>
      <form>
        <input type="email"
          value={ username }
          onChange={ a => handleUsername(a.target.value) }
          placeholder="login"
        />
        <input
          type="password"
          value={ password }
          onChange={ a => handlePassword(a.target.value) }
          placeholder="password"
         />
        <input type="button" value="login" onClick={ submit } />
      </form>
    </div>
    { User && (
      <div>{ User.username } está logado</div>
    )}
  </Fragment>
)

export default LoginForm;
