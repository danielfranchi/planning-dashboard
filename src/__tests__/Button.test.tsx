import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Importe o MemoryRouter
import Button from '../components/Button';

describe('Button', () => {
  it('carrega na página', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Button text="Meu botão" />
      </MemoryRouter>
    );
    expect(getByText('Meu botão')).toBeInTheDocument();
  });

  it('tem texto dentro', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Button text="Meu botão" />
      </MemoryRouter>
    );
    expect(getByText('Meu botão')).toHaveTextContent('Meu botão');
  });
});
