import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders key landing content', () => {
    render(<App />);
    expect(screen.getByText(/Launch high-converting product pages/i)).toBeInTheDocument();
    expect(screen.getByText(/A\/B tests in 5 min/i)).toBeInTheDocument();
  });
});
