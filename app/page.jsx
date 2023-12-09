import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcom to Kaoskaki</h1>
      <ul>
        <li><Link href={`/`}>Home</Link></li>
        <li><Link href={`/about`}>About</Link></li>
        <li><Link href={`/about/teams`}>Teams</Link></li>
      </ul>
    </div>
  )
}
