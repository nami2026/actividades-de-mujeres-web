import React, { Component } from 'react';

class CicloDeVida extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.incrementar = this.incrementar.bind(this);
  }

  componentDidMount() {
    console.log('El componente se ha montado en el DOM.');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('El componente se ha actualizado.');
    console.log('Estado anterior:', prevState);
    console.log('Nuevo estado:', this.state);
  }

  componentWillUnmount() {
    console.log('El componente se desmontará del DOM.');
  }

  incrementar() {
    this.setState({ contador: this.state.contador + 1 });
  }

  render() {
    return (
      <div>
        <h1>Contador: {this.state.contador}</h1>
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}

export default CicloDeVida;
