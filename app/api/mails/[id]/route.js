import { google } from 'googleapis';
import { Base64 } from 'js-base64';
import { findOtp } from './../../../(utils)/helper';

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
const userId = `${process.env.EMAIL}`;
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

  const { payload } = await res.json();
  const plainTextPart = payload.parts.find(
    (part) => part.mimeType === 'text/plain'
  );
  const raw = plainTextPart.body.data;

  const otp = findOtp(raw);
  const body = Base64.decode(raw);

  const data = {
    idEmail: id,
    date: payload.headers.find((header) => header.name === 'Date').value,
    to: payload.headers.find((header) => header.name === 'Delivered-To').value,
    from: payload.headers.find((header) => header.name === 'From').value,
    subject: payload.headers.find((header) => header.name === 'Subject').value,
    otp,
    body,
  };

  return data;
}

export async function GET(request, { params }) {
  const id = params.id;
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('otp');
  const data = await DetailEmail(id);

  if (query === 'true') {
    return Response.json({ data: { otp: data.otp } });
  } else {
    return Response.json({ data: data });
  }
}
