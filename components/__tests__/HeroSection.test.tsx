import { render, screen } from '@testing-library/react';
import HeroSection from '../HeroSection';

test('renders hero section with title and button', () => {
  render(<HeroSection />);
  expect(screen.getByText(/Custom Corporate Uniforms/i)).toBeInTheDocument();
  expect(screen.getByText(/Sports T-Shirts/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /get a free quote/i })).toBeInTheDocument();
});
