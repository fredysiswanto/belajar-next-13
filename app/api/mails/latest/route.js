import { google } from 'googleapis';
import { findOtp } from './../../../(utils)/helper';

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
const userId = `${process.env.EMAIL}`;

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

  const data = {
    date: payload.headers.find((header) => header.name === 'Date').value,
    otp,
  };

  return data;
}

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('latest');
  const emailList = [];
  const res = await fetch(
    `https://gmail.googleapis.com/gmail/v1/users/${userId}/messages?maxResults=1&labelIds=Label_1763624457455248516`,
    {
      headers: {
        Authorization: `Bearer ${token} `,
        'Content-type': 'application/json',
      },
    }
  );
  const { messages } = await res.json();
  const emailId = messages[0].id;

  const data = await DetailEmail(emailId);
  // await Promise.all(promises);
  return Response.json({ data: data });
}
