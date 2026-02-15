import { render, screen } from '@testing-library/react';
import HeroSection from '../HeroSection';

test('renders hero section with title and button', () => {
  render(<HeroSection />);
  expect(screen.getByText(/Premium Custom Uniforms/i)).toBeInTheDocument();
  expect(screen.getByText(/Made Where the Best Brands Manufacture/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /get a free quote/i })).toBeInTheDocument();
});
