// 'use client';
import Link from 'next/link';
import { Suspense } from 'react';

async function fetchEmails() {
  const response = await fetch(`http://localhost:3000/api/mails`);
  const data = await response.json();
  return data;
}
export default async function EmailsPage() {
  const { data } = await fetchEmails();
  return (
    <div className='repos-containter'>
      <h2>Emails</h2>
      <ul className='repo-list'>
        {data.map((mail) => {
          return (
            <li key={mail.idEmail}>
              <Link href={`/emails/${mail.idEmail}`}>
                <p>Delivered-To : {mail.to}</p>
                <p>Date : {mail.date}</p>
                <p>From : {mail.from}</p>
                <p>Subject: {mail.subject}</p>

                <div className='repo-details'></div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
