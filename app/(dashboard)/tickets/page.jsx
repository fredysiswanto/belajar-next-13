import { Suspense } from 'react';
import TicketList from './TicketList';
export default function TicketPage() {
  return (
    <div>
      <h2>Tickets</h2>
      <p>
        <small>Curruntly open tikets</small>
      </p>
      <Suspense>
        <TicketList />
      </Suspense>
    </div>
  );
}
