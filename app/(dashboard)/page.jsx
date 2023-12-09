import Link from 'next/link';

export default function Home() {
  return (
    <main className=''>
      <h2>Dashboard</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quod
        distinctio mollitia ipsum veniam laudantium voluptatibus est omnis quo
        quos ut hic consequuntur commodi repellat voluptatem, reiciendis fugit,
        iure deserunt.
      </p>

      <div className='flex justify-center my-8'>
        <Link href={'/tickets'}>
          <button className='btn-primary'>View Tickets</button>
        </Link>
      </div>
      <h2>Company Update</h2>
      <div className='card'>
        <h3>new Member of team Dev...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          quasi saepe, iure dicta nisi temporibus inventore voluptatum iusto
          quia obcaecati?
        </p>
      </div>

      <div className='card'>
        <h3>Lorem ipsum dolor sit.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          autem minima velit laboriosam dolor eveniet in harum, obcaecati nemo,
          sit nesciunt eligendi fugiat mollitia rerum, consequuntur recusandae!
          Alias vel quo fugit pariatur expedita, totam facilis, culpa quia
          consequatur dignissimos vero temporibus accusantium doloremque?
          Tempora facere officiis maxime beatae ad quas!
        </p>
      </div>
    </main>
  );
}
