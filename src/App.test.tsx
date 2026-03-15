import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('renders carousel agent landing content', () => {
    render(<App />);
    expect(screen.getByText(/AI-агент для красивых Instagram-каруселей/i)).toBeInTheDocument();
    expect(screen.getByText(/Hook-driven сценарии/i)).toBeInTheDocument();
  });

  it('updates generated output when niche changes', async () => {
    const user = userEvent.setup();
    render(<App />);

    const nicheField = screen.getByLabelText('Ниша');
    await user.clear(nicheField);
    await user.type(nicheField, 'Фитнес-коучинг');

    expect(screen.getAllByText(/Как Фитнес-коучинг может привлекать/i).length).toBeGreaterThan(0);
  });
});
