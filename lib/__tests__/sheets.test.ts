// Mock googleapis before import
const mockAppend = jest.fn();
jest.doMock('googleapis', () => ({
  google: {
    sheets: jest.fn().mockReturnValue({
      spreadsheets: {
        values: {
          append: mockAppend,
        },
      },
    }),
    auth: {
      GoogleAuth: jest.fn().mockImplementation(() => ({
        // Mock auth
      })),
    },
  },
}));

import { appendToSheet } from '../sheets';

describe('appendToSheet', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Mock env vars
    process.env.GOOGLE_SERVICE_ACCOUNT_KEY = '{"client_email":"test@test.com","private_key":"test_key"}';
    process.env.GOOGLE_SHEET_ID = 'test_sheet_id';
  });

  it('appends data to sheet successfully', async () => {
    mockAppend.mockResolvedValue({ data: {} });

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

    await expect(appendToSheet(testData)).resolves.toBeUndefined();

    expect(mockAppend).toHaveBeenCalledTimes(1);
  });

  it('throws error on append failure', async () => {
    mockAppend.mockRejectedValue(new Error('Append failed'));

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

    await expect(appendToSheet(testData)).rejects.toThrow('Append failed');
  });

  it('appends data with empty middle fields correctly', async () => {
    mockAppend.mockResolvedValue({ data: {} });

    const testData = {
      companyName: 'Test Co',
      contactName: 'John Doe',
      email: 'john@example.com',
      phone: '', // Empty
      location: '', // Empty
      garmentType: 'Sports T-Shirts',
      quantityEstimate: '50–100',
      deadline: '', // Empty
      message: 'Test message',
    };

    await expect(appendToSheet(testData)).resolves.toBeUndefined();

    expect(mockAppend).toHaveBeenCalledTimes(1);
    const callArgs = mockAppend.mock.calls[0][0];
    expect(callArgs.requestBody.values).toHaveLength(1);
    const row = callArgs.requestBody.values[0];
    expect(row).toHaveLength(11);
    expect(row[0]).toEqual(expect.any(String)); // Timestamp
    expect(row[1]).toBe('Test Co'); // Company
    expect(row[2]).toBe('John Doe'); // Name
    expect(row[3]).toBe('john@example.com'); // Email
    expect(row[4]).toBe(''); // Phone empty
    expect(row[5]).toBe(''); // Location empty
    expect(row[6]).toBe('Sports T-Shirts'); // Type
    expect(row[7]).toBe('50–100'); // Quantity
    expect(row[8]).toBe(''); // Deadline empty
    expect(row[9]).toBe('Test message'); // Message
    expect(row[10]).toBe('New'); // Status
  });
});
