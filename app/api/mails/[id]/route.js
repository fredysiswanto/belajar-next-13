import { google } from 'googleapis';
import { Base64 } from 'js-base64';
import { findOtp } from './../../../(utils)/helper';

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
const userId = `tester.fredy@gmail.com`;
let raw = '';
let otp = '';
const { token } = await oAuth2Client.getAccessToken();
async function DetailEmail(id) {
  const res = await fetch(
    `https://gmail.googleapis.com/gmail/v1/users/${userId}/messages/${id}?fields=payload`,
    {
      headers: {
        Authorization: `Bearer ${token} `,
        'Content-type': 'application/json',
      },
    }
  );

  const buffer = await res.json();
  raw = buffer.payload.parts.find((part) => part.mimeType === 'text/plain').body
    .data;
  otp = findOtp(raw);

  const data = {
    idEmail: id,
    date: buffer.payload.headers.find((header) => header.name === 'Date').value,
    to: buffer.payload.headers.find((header) => header.name === 'Delivered-To')
      .value,
    from: buffer.payload.headers.find((header) => header.name === 'From').value,
    subject: buffer.payload.headers.find((header) => header.name === 'Subject')
      .value,
    otp: otp ? otp : null,
    body: Base64.decode(raw),
  };
  return data;
}

export async function GET(request, params) {
  // const id = params.id;
  // const data = await DetailEmail(id);
  console.log(params);
  return Response.json({ data: '' });
}
