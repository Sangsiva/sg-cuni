# API Setup Guide

This guide covers setting up external APIs for email sending (Resend) and data storage (Google Sheets) in the sgCorpUni project.

## Resend Email Setup

### 1. Sign Up and Get API Key
- Visit [resend.com](https://resend.com) and sign up with your email (e.g., sivaeee1992@gmail.com).
- In the dashboard, go to **API Keys**.
- Create a new API key (name it "sgCorpUni Production").
- Copy the API key (starts with `re_`).

### 2. Verify a Domain
- Gmail domains cannot be used for sending. You need a custom domain.
- Go to **Domains** in the dashboard.
- Add your domain (e.g., buy `sgcorpuni.com` from Namecheap ~$10/year).
- Follow DNS verification:
  - Add the provided TXT record to your domain's DNS settings.
  - Wait for verification (can take minutes to hours).
- Once verified, you can send from `noreply@yourdomain.com`.

### 3. Environment Variables
- In `.env.local` (local) or Vercel settings (production):
  ```
  RESEND_API_KEY=re_your_key_here
  ```
- Update `lib/email.ts`:
  ```typescript
  from: 'noreply@yourdomain.com', // Your verified domain
  to: 'leads@yourdomain.com', // Or your email/group
  ```

### 4. Testing
- Submit the contact form.
- Check your email for the enquiry email.

## Google Sheets Setup

### 1. Create Google Cloud Project
- Go to [Google Cloud Console](https://console.cloud.google.com).
- Create a new project (e.g., "sgCorpUni").
- Enable the **Google Sheets API** (APIs & Services > Library > Search "Sheets" > Enable).

### 2. Create Service Account
- Go to **IAM & Admin > Service Accounts**.
- Create a service account (name: "sgCorpUni Sheets", email: auto-generated).
- Grant role: **Editor** (or minimal permissions).
- Create a JSON key: **Keys > Add Key > JSON**.
- Download the JSON file (keep it secure).

### 3. Set Up Google Sheet
- Create a new Google Sheet.
- Share it with the service account email (from step 2) as **Editor**.
- Add headers in row 1: Timestamp, Company, Contact, Email, Phone, Location, Type, Quantity, Deadline, Message, Status.
- Get the Sheet ID from the URL: `https://docs.google.com/spreadsheets/d/[SHEET_ID]/edit`.

### 4. Environment Variables
- In `.env.local`:
  ```
  GOOGLE_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
  GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
  GOOGLE_SHEET_ID=your_sheet_id_here
  ```
- Copy from the downloaded JSON:
  - `client_email` → GOOGLE_CLIENT_EMAIL
  - `private_key` → GOOGLE_PRIVATE_KEY (with \n escaped if needed)

### 5. Testing
- Submit the contact form.
- Check the Google Sheet for a new row.

## Deployment on Vercel

- In Vercel project settings, add the above env vars.
- Deploy; test the contact form in production.

## Troubleshooting

- **Resend Errors**: Check domain verification and API key.
- **Sheets Errors**: Verify service account permissions and sheet sharing.
- **Logs**: Check Vercel logs or local console for errors.

## Security Notes

- Never commit `.env.local` (it's in `.gitignore`).
- Rotate API keys regularly.
- Use Google Groups for email forwarding to multiple recipients.
