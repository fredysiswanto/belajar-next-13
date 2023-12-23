import { google } from 'googleapis';

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
const userId = `tester.fredy@gmail.com`;

const { token } = await oAuth2Client.getAccessToken();
async function ListEmail(id) {
  const emailList = [];
  const res = await fetch(
    `https://gmail.googleapis.com/gmail/v1/users/${userId}/messages/${id}?format=metadata&fields=payload.headers`,
    {
      headers: {
        Authorization: `Bearer ${token} `,
        'Content-type': 'application/json',
      },
    }
  );

  const data = await res.json();
  return data;
}

export async function GET() {
  const emailList = [];
  const res = await fetch(
    `https://gmail.googleapis.com/gmail/v1/users/${userId}/messages?maxResults=5&labelIds=Label_1763624457455248516`,
    {
      headers: {
        Authorization: `Bearer ${token} `,
        'Content-type': 'application/json',
      },
    }
  );

  const data = await res.json();
  const promises = data.messages.map(async (message) => {
    const { payload } = await ListEmail(message.id);
    const buffer = {
      idEmail: message.id,
      date: payload.headers.find((header) => header.name === 'Date').value,
      to: payload.headers.find((header) => header.name === 'Delivered-To')
        .value,
      from: payload.headers.find((header) => header.name === 'From').value,
      subject: payload.headers.find((header) => header.name === 'Subject')
        .value,
    };
    emailList.push(buffer);
  });

  await Promise.all(promises);
  return Response.json({ data: emailList });
}
