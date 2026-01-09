// test-resend.mjs
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const run = async () => {
  const { data, error } = await resend.emails.send({
    from: 'Test <onboarding@resend.dev>',
    to: ['sivaeee1992@gmail.com'],
    subject: 'Test from script',
    text: 'If you see this, Resend works.',
  });

  console.log('data:', data);
  console.log('error:', error);
};

run().catch(console.error);
