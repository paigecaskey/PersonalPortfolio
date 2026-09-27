// Emails DJ booking requests from the music page via Resend (https://resend.com).
// Needs RESEND_API_KEY; sends to DJ_REQUEST_TO, or the site owner's address by default.

const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const DEFAULT_TO = 'paigecaskey@gmail.com';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LIMITS = {
  name: 100,
  email: 200,
  message: 2000,
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name = '', email = '', message = '', website = '' } = req.body || {};

  // Honeypot: real visitors never see or fill the "website" field.
  if (website) {
    return res.status(200).json({ ok: true });
  }

  const fields = {
    name: String(name).trim(),
    email: String(email).trim(),
    message: String(message).trim(),
  };

  if (!fields.name || !fields.email || !fields.message) {
    return res.status(400).json({ error: 'Please fill in every field.' });
  }

  if (!EMAIL_PATTERN.test(fields.email)) {
    return res.status(400).json({ error: 'That email address doesn’t look right.' });
  }

  const tooLong = Object.keys(LIMITS).find((key) => fields[key].length > LIMITS[key]);
  if (tooLong) {
    return res.status(400).json({ error: `Your ${tooLong} is too long.` });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'The form isn’t set up yet. Try again soon!' });
  }

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.DJ_REQUEST_FROM || 'DJ requests <onboarding@resend.dev>',
        to: [process.env.DJ_REQUEST_TO || DEFAULT_TO],
        reply_to: fields.email,
        subject: `DJ request from ${fields.name}`,
        text: `Name: ${fields.name}\nEmail: ${fields.email}\n\n${fields.message}`,
      }),
    });

    if (!response.ok) {
      console.error('Resend error:', response.status, await response.text());
      return res.status(502).json({ error: 'Couldn’t send right now. Try again soon!' });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('DJ request failed:', error);
    return res.status(500).json({ error: 'Couldn’t send right now. Try again soon!' });
  }
}
