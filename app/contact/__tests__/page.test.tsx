import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '../page';

const mockFetch = jest.fn();
global.fetch = mockFetch;

beforeEach(() => {
  mockFetch.mockClear();
  mockFetch.mockResolvedValue({
    ok: true,
    json: () => Promise.resolve({}),
  });
});

test('submits contact form successfully', async () => {
  const user = userEvent.setup();
  render(<Contact />);

  await user.type(screen.getByLabelText('Company Name *'), 'Test Company');
  await user.type(screen.getByLabelText('Contact Name *'), 'John Doe');
  await user.type(screen.getByLabelText('Email *'), 'john@example.com');
  await user.selectOptions(screen.getByLabelText('Garment Type *'), 'Sports T-Shirts');
  await user.selectOptions(screen.getByLabelText('Quantity Estimate *'), '50–100');
  await user.type(screen.getByLabelText('Message *'), 'Test message');

  await user.click(screen.getByRole('button', { name: /submit enquiry/i }));

  await waitFor(() => {
    expect(screen.getByText('Enquiry submitted successfully!')).toBeInTheDocument();
  });

  expect(mockFetch).toHaveBeenCalledWith('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      companyName: 'Test Company',
      contactName: 'John Doe',
      email: 'john@example.com',
      phone: '',
      location: '',
      garmentType: 'Sports T-Shirts',
      quantityEstimate: '50–100',
      deadline: '',
      message: 'Test message',
    }),
  });
});
