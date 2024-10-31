import { render, fireEvent } from '@testing-library/react';
import Boton from './Boton';

test('cambia el texto al hacer clic', () => {
  const { getByText } = render(<Boton />);
  const boton = getByText('Hacer clic aquí');

  fireEvent.click(boton);

  expect(boton.textContent).toBe('¡Gracias por hacer clic!');
});
