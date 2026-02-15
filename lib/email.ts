export async function sendEmail(data: any) {
  const { companyName, contactName, email, phone, location, garmentType, quantityEstimate, deadline, message, fabric, colors } = data;

  const { Resend } = await import('resend');
  const resend = new Resend(process.env.RESEND_API_KEY);

  const subject = `New Uniform Enquiry – ${companyName}`;
  const body = `
New enquiry received:

Company: ${companyName}
Contact: ${contactName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Location: ${location || 'Not provided'}
Garment Type: ${garmentType}
Quantity: ${quantityEstimate}
Fabric: ${fabric || 'Not specified'}
Colors: ${colors || 'Not specified'}
Deadline: ${deadline || 'Not specified'}
Message: ${message}
  `.trim();

  try {
    console.log('Sending email with API key present:', !!process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your verified domain
      to: 'sivaeee1992@gmail.com', // Google Group or alias
      subject,
      text: body,
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Email send failed:', error);
    throw error;
  }
}
