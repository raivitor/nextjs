import React, { Component, Fragment } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import FotoItem from './foto'

class Timeline extends Component {

  renderPhotoList = () => (
    this.props.data.allPhotos.map(foto => <FotoItem key={foto.id} foto={foto} />)
  )

  render() {
    const { data } = this.props;
    console.log(data)
    return (
      <Fragment>
        {data.loading
          ? <p>Carregando...</p>
          : this.renderPhotoList()}
      </Fragment>
    );
  }
}

const getPhotos = gql`
{
  allPhotos {
    id
    url
		user{
      username
      photoPerfil
    }
    description
  }
}
`;

// #todo: \/ depois simplificar código abaixo.

// Create our enhancer function.
const withTodoAppQuery = graphql(getPhotos);

// Enhance our component.
const TodoAppWithData = withTodoAppQuery(Timeline);

// Export the enhanced component.
export default TodoAppWithData;