import Link from 'next/link';

async function getTikets() {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 3000);
  // });
  const res = await fetch('http://localhost:4000/tickets', {
    next: { revalidate: 30 },
  });
  return res.json();
}

export default async function TicketList() {
  const tickets = await getTikets();
  return (
    <>
      <Link href={'/tickets/create'}>
        <button className='btn-primary'>Add Ticket</button>
      </Link>

      {tickets.map((ticket) => {
        return (
          <div key={ticket.id} className='card my-5'>
            <Link href={`/tickets/${ticket.id}`}>
              <h3>{ticket.title}</h3>
              <p>{ticket.body.slice(0, 200)}...</p>
              <div className={`pill ${ticket.priority}`}>priority</div>
            </Link>
          </div>
        );
      })}
      {tickets.length === 0 && (
        <p className='text-center'>There are no tickets, yay!</p>
      )}
    </>
  );
}
