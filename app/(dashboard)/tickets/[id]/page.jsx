import { notFound } from 'next/navigation';

async function getTiket(id) {
  const ticket = await fetch(`http://localhost:4000/tickets/${id}`);
  if (ticket.status === 200) {
    return ticket.json();
  }
  return notFound();
}
export default async function TicketDetail({ params }) {
  const ticket = await getTiket(params.id);

  return (
    <>
      <div>
        <h2>Detail Ticket</h2>
      </div>
      <div key={ticket.id} className='card'>
        <h3>{ticket.title}</h3>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>priority</div>
      </div>
    </>
  );
}
