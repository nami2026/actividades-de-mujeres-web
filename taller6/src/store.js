import { createStore } from 'redux';

const initialState = { contador: 0 };

function contadorReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENTAR':
      return { contador: state.contador + 1 };
    case 'DECREMENTAR':
      return { contador: state.contador - 1 };
    default:
      return state;
  }
}

export const store = createStore(contadorReducer);
