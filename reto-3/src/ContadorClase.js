import React,{ Component } from 'react';

class ContadorClase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    
    this.incrementar = this.incrementar.bind(this);
  }

  incrementar() {
    this.setState({ contador: this.state.contador + 1 });
  }

  render() {
    return (
      <div>
        <h1>Contador Clase: {this.state.contador}</h1>
        <button onClick={this.incrementar}>
          Incrementar
        </button>
      </div>
    );
  }
}

export default ContadorClase;
