import { Base64 } from 'js-base64';

function findContentEmail(detailsEmail, idEmail) {
  const data = {};
  if (idEmail) {
    data.idEmail = idEmail;
    data.date = detailsEmail.payload.headers.find(
      (header) => header.name === 'Date'
    ).value;
    data.from = detailsEmail.payload.headers.find(
      (header) => header.name === 'From'
    ).value;
    data.subject = detailsEmail.payload.headers.find(
      (header) => header.name === 'Subject'
    ).value;
    data.body = atob(
      detailsEmail.payload.parts.find((part) => part.mimeType === 'text/plain')
        .body.data
    );
    return data;
  }

  // return detailsEmail;
}

function findOtp(raw = null) {
  const text = Base64.decode(raw);
  const otpPattern = /\b\d{5}\b/;
  const match = text.match(otpPattern);
  // console.log(match);
  if (match && match.length > 0) {
    return match[0];
  } else {
    // Return null or any other value to indicate that no OTP code was found
    return null;
  }
}

export { findContentEmail, findOtp };
