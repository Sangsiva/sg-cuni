import { render, screen } from '@testing-library/react';
import HeroSection from '../HeroSection';

test('renders hero section with title and button', () => {
  render(<HeroSection />);
  expect(screen.getByText('Professional Corporate Uniforms & Sports T-Shirts')).toBeInTheDocument();
  expect(screen.getByText('Singapore service + Tirupur manufacturing power for your business needs.')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /get a quote/i })).toBeInTheDocument();
});
