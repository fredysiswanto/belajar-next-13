import Image from 'next/image';
import Link from 'next/link';
import logo from './../assets/images/logo_kotak.svg';

export default function nav(user) {
  return (
    <nav>
      <Image src={logo} alt='' width={40} height={40}></Image>
      <h1>Panduan QA</h1>
      <Link href='/'>Home</Link>
      <Link href='/tickets'>Tickets</Link>
      <Link href='/news'>News</Link>
      {user && <span>Hello, {user}</span>}
    </nav>
  );
}
