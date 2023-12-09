import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='text-center'>
      <h2 className='text-2xl'>There was a problem</h2>
      <p>We could not find the page you were looking for.</p>
      <p>
        Go back to the <Link href={'/'}>Home</Link>
      </p>
    </main>
  );
}
