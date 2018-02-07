import React, { Component } from 'react';

class FotoAtualizacoes extends Component {
  render() {
    return (
      <section className="fotoAtualizacoes">
        <a href="#" className="fotoAtualizacoes-like">Likar</a>
        <form className="fotoAtualizacoes-form">
          <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo" />
          <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit" />
        </form>
      </section>
    );
  }
}

class FotoInfo extends Component {
  render() {
    return (
      <div className="foto-in fo">
        <div className="foto-info-likes">
          0 curtiram
        </div>

        <p className="foto-info-legenda">
          <a className="foto-info-autor">{this.props.foto.user.username} </a>
          {this.props.foto.description}
        </p>
      </div>
    );
  }
}

class FotoHeader extends Component {
  render() {
    return (
      <header className="foto-header">
        <figure className="foto-usuario">
          <img src={this.props.foto.user.photoPerfil} alt="foto do usuario" />
          <figcaption className="foto-usuario">
            <a to={`/timeline/${this.props.foto.user.username}`}>
              {this.props.foto.user.username}
            </a>
          </figcaption>
        </figure>
      </header>
    );
  }
}

export default class FotoItem extends Component {
  render() {
    console.log(this.props.foto)
    return (

      <div className="foto">
        <FotoHeader foto={this.props.foto} />
        <img alt="foto" className="foto-src" src={this.props.foto.url} />
        <FotoInfo foto={this.props.foto} />
        <FotoAtualizacoes />
      </div>
    );
  }
}