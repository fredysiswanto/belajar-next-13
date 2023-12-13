import { generateConfig } from '../../(utils)/generateConfig';
import nodemailer from 'nodemailer';
import CONSTANTS from '../../(utils)/generateConfig';
import { google } from 'googleapis';

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

export async function GET() {
  const userId = `tester.fredy@gmail.com`;
  const { token } = await oAuth2Client.getAccessToken();
  const res = await fetch(
    `https://gmail.googleapis.com/gmail/v1/users/${userId}/messages?maxResults=5`,
    {
      headers: {
        Authorization: `Bearer ${token} `,
        'Content-type': 'application/json',
      },
    }
  );

  const data = await res.json().then((e) => console.log(e));
  // console.log(data);

  return Response.json({ data });
}
