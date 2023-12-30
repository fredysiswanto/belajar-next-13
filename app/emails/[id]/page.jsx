import Link from 'next/link';

async function fetchEmails(id) {
  const response = await fetch(`${process.env.BASE_URL}/api/mails/${id}`);
  const data = await response.json();
  return data;
}
export default async function DetailEmailPage({ params: { id } }) {
  const { data } = await fetchEmails(id);
  return (
    <div className='card'>
      <h2>Detail Email</h2>
      <Link href={`/emails/`}>Back</Link>
      <div className='email-details'>
        <div>
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
        </div>
      </div>
    </div>
  );
}
