import { google } from 'googleapis';

const sheets = google.sheets('v4');

export async function appendToSheet(data: any) {
  // Service account key from environment JSON
  const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY!);
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: serviceAccount.client_email,
      private_key: serviceAccount.private_key,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const spreadsheetId = process.env.GOOGLE_SHEET_ID; // Your sheet ID
  const range = 'Sheet1!A:M'; // Adjust range

  const values = [[
    new Date().toISOString(), // Enquiry_date
    data.companyName, // Company_name
    data.contactName, // Contact_name
    data.email, // Contact_email
    data.phone || '', // Contact_number
    data.location || '', // Contact_location
    data.garmentType, // Garment Type
    data.quantityEstimate, // Quantity
    data.fabric || '', // Fabric
    data.colors || '', // Colors
    data.deadline || '', // Deadline
    data.message, // Message
    'New', // Status
  ]];

  console.log('Appending values:', values);

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      auth,
      requestBody: { values },
    });
    console.log('Data appended to sheet');
  } catch (error) {
    console.error('Sheet append failed:', error);
    throw error;
  }
}
