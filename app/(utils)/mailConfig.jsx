/* eslint-disable import/no-anonymous-default-export */
// require('dotenv').config();

const auth = {
  type: 'OAuth2',
  user: 'tester.fredy@gmail.com',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN,
};

const mailoptions = {
  from: 'tester.fredy@gmail.com',
  to: 'escendol@yopmail.com',
  subject: 'Gmail API NodeJS',
};

export default {
  auth,
  mailoptions,
};
