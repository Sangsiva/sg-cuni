# Deployment and Setup Guide for SG Corp Uniforms

This document outlines the steps taken to set up email routing, domain verification, and search engine indexing for the SG Corp Uniforms website deployed on Vercel.

## 1. Vercel Deployment
The website is built with Next.js (TypeScript) and deployed on Vercel for seamless hosting, automatic builds, and scalability.

### Steps:
1. **Connect Repository**:
   - Sign up/login to [Vercel](https://vercel.com/).
   - Import your Git repository (e.g., from GitHub).

2. **Configure Build Settings**:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next` (default)
   - Node Version: 18.x or latest LTS

3. **Environment Variables**:
   - Add in Vercel dashboard > Project > Settings > Environment Variables:
     - `RESEND_API_KEY`: Your Resend API key
     - `GOOGLE_SERVICE_ACCOUNT_KEY`: Full JSON string of Google service account
     - `GOOGLE_SHEET_ID`: Your Google Sheet ID
   - Set for Production (and Preview if needed).

4. **Deploy**:
   - Vercel auto-deploys on git pushes.
   - Check build logs in Vercel dashboard for errors.

### Notes:
- Vercel provides automatic HTTPS, CDN, and serverless functions for API routes.
- For TypeScript, ensure `tsconfig.json` is configured correctly (e.g., `"jsx": "react-jsx"`).

## 2. Domain Registration and Setup
The domain sgcorpuniforms.com was purchased and managed through Vercel.

### Steps:
1. **Purchase Domain**:
   - In Vercel dashboard, go to Domains > Buy Domain.
   - Search and purchase `sgcorpuniforms.com` (or transfer existing).

2. **Connect to Project**:
   - Assign the domain to your project in Vercel.
   - Vercel handles DNS automatically for the root domain and www.

3. **DNS Management**:
   - For custom DNS (e.g., email routing), go to Domains > sgcorpuniforms.com > DNS.
   - Add records as needed (TXT, MX, CNAME).

### Notes:
- Vercel provides free domain for personal plans.
- DNS changes may take 24-48 hours to propagate.

## 3. Email Setup with ImprovMX
To handle emails sent to enquiry@sgcorpuniforms.com, we use ImprovMX to forward them to a personal Gmail account.

### Steps:
1. **Create ImprovMX Account**:
   - Sign up at [ImprovMX](https://app.improvmx.com/).
   - Add your domain: `sgcorpuniforms.com`.

2. **Set Up Email Alias**:
   - In ImprovMX dashboard, go to Domains > sgcorpuniforms.com > Aliases.
   - Create alias: `enquiry` forwarding to your Gmail address (e.g., `your-gmail@gmail.com`).

3. **DNS Records**:
   - ImprovMX provides TXT and MX records for domain verification and routing.
   - Example records (replace with your actual ones from ImprovMX):
     - **TXT Record**:
       - Name: `@` or `sgcorpuniforms.com`
       - Value: `v=spf1 include:_spf.improvmx.com ~all` (or the exact TXT provided)
     - **MX Records**:
       - Priority: 10, Host: `mx1.improvmx.com`
       - Priority: 20, Host: `mx2.improvmx.com`

4. **Add DNS to Vercel**:
   - In Vercel dashboard, go to your project > Settings > Domains > sgcorpuniforms.com > DNS.
   - Add the TXT and MX records provided by ImprovMX.
   - This allows Vercel to manage DNS for the domain.

### Notes:
- Emails to enquiry@sgcorpuniforms.com will now forward to your Gmail.
- If using Resend for sending emails, verify the domain in Resend dashboard for professional `from` addresses (e.g., noreply@sgcorpuniforms.com).

## 4. Google Search Console Setup
To monitor and improve SEO, add the site to Google Search Console.

### Steps:
1. **Access Google Search Console**:
   - Go to [Google Search Console](https://search.google.com/search-console).
   - Sign in with your Google account.

2. **Add Property**:
   - Click "Add Property" > "Domain" > Enter `sgcorpuniforms.com`.
   - Choose "sc-domain:sgcorpuniforms.com" as the property.

3. **Verify Ownership**:
   - Google will provide DNS records (TXT or CNAME) for verification.
   - Example: Add a TXT record like `google-site-verification=abc123...`

4. **Add DNS to Vercel**:
   - In Vercel dashboard, under Domains > sgcorpuniforms.com > DNS, add the verification TXT/CNAME record.
   - Once added, click "Verify" in Google Search Console.

### Notes:
- After verification, submit your sitemap (if created) at `https://sgcorpuniforms.com/sitemap.xml`.
- Monitor indexing, search performance, and fix any issues.

## 5. Additional Recommendations
- **SSL/TLS**: Vercel provides automatic HTTPS for custom domains.
- **Analytics**: Consider adding Google Analytics or Vercel Analytics for traffic tracking.
- **Backups**: Regularly backup code and data (Google Sheets).
- **Monitoring**: Use Vercel logs and Resend dashboard for email delivery monitoring.

## Contact
For issues, contact the development team or refer to:
- [Vercel Docs](https://vercel.com/docs)
- [ImprovMX Docs](https://docs.improvmx.com/)
- [Google Search Console Help](https://support.google.com/webmasters)

Last Updated: [Date]
