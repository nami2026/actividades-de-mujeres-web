import React, { Component } from 'react';

class Combinado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      mensaje: 'Bienvenido',
    };
    this.incrementar = this.incrementar.bind(this);
  }

  componentDidMount() {
    console.log('Componente montado.');
    this.setState({ mensaje: 'El componente se ha montado' });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contador !== this.state.contador) {
      console.log('El contador ha cambiado.');
    }
  }

  componentWillUnmount() {
    console.log('Componente desmontado.');
  }

  incrementar() {
    this.setState({ contador: this.state.contador + 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.mensaje}</h1>
        <h2>Contador: {this.state.contador}</h2>
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}

export default Combinado;
