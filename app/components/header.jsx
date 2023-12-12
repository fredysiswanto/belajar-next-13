import Link from 'next/link';

export default function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <div className='logo'>
          <Link href={`/`}>Panduan QA</Link>
        </div>
        <div className='links'>
          <Link href={`/`}>Home</Link>
          <Link href={`/about`}>About</Link>
          <Link href={`/about/teams`}>Teams</Link>
          <Link href={`/code/repos`}>Repos</Link>
          <Link href={`/projects`}>Projects</Link>
          <Link href={`/emails`}>Emails</Link>
        </div>
      </div>
    </div>
  );
}
