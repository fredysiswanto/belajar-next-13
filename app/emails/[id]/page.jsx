import Link from 'next/link';

async function fetchEmails(id) {
  const response = await fetch(`http://localhost:3000/api/mails/${id}`);
  data = await response.json();
  return data;
}
export default async function DetailEmailPage({ params: { id } }) {
  const { data } = await fetchEmails(id);
  return (
    <div className='card'>
      <h2>Detail Email</h2>
      <Link href={`/emails/`}>Back</Link>
      <ul className='email-details'>
        <li>
          <p>Delivered-To : {data.to}</p>
          <p>Date : {data.date}</p>
          <p>From : {data.from}</p>
          <p>Subject: {data.subject}</p>
          <p>OTP: {data.otp}</p>
          <div>
            <pre>
              <code> {data.body}</code>
            </pre>
          </div>

          <div className='repo-details'></div>
        </li>
      </ul>
    </div>
  );
}
