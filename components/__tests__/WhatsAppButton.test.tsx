import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WhatsAppButton } from '../WhatsAppButton';

// Mock next/link if needed, but since it's just an anchor, no need.

describe('WhatsAppButton', () => {
  it('renders WhatsApp button with correct link and label', () => {
    render(<WhatsAppButton label="Test Label" />);

    const link = screen.getByRole('link', { name: /test label/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', expect.stringContaining('wa.me/6580176492'));
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders default label when no label provided', () => {
    render(<WhatsAppButton />);

    const link = screen.getByRole('link', { name: /whatsApp us/i });
    expect(link).toBeInTheDocument();
  });

  it('includes default message in WhatsApp link', () => {
    render(<WhatsAppButton />);

    const link = screen.getByRole('link');
    const href = link.getAttribute('href');
    expect(href).toContain(encodeURIComponent('Hi SG Corp Uniforms, I saw your website and would like a quote for 50 pcs of corporate T-shirts.'));
  });
});
