// Mock resend before import
const mockSend = jest.fn();
jest.doMock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: mockSend,
    },
  })),
}));

import { sendEmail } from '../email';

describe('sendEmail', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Mock the env var
    process.env.RESEND_API_KEY = 'test_key';
  });

  it('sends email successfully with correct data', async () => {
    mockSend.mockResolvedValue({ data: { id: 'test' } });

    const testData = {
      companyName: 'Test Co',
      contactName: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      location: 'Singapore',
      garmentType: 'Sports T-Shirts',
      quantityEstimate: '50–100',
      deadline: '2024-12-31',
      message: 'Test message',
    };

    await expect(sendEmail(testData)).resolves.toBeUndefined();

    expect(mockSend).toHaveBeenCalledTimes(1);
  });

  it('throws error on send failure', async () => {
    mockSend.mockRejectedValue(new Error('Send failed'));

    const testData = {
      companyName: 'Test Co',
      contactName: 'John Doe',
      email: 'john@example.com',
      phone: '',
      location: '',
      garmentType: 'Sports T-Shirts',
      quantityEstimate: '50–100',
      deadline: '',
      message: 'Test message',
    };

    await expect(sendEmail(testData)).rejects.toThrow('Send failed');
  });
});
