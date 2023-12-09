'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreateForm() {
  const router = useRouter();
  const [title, setTittle] = useState('');
  const [body, setBody] = useState('');
  const [priority, setPriority] = useState('low');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const ticket = {
      title,
      body,
      priority,
      user_email: 'admin@admin.com',
    };
    const res = await fetch('http://localhost:4000/tickets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ticket),
    });

    if (res.status === 201) {
      router.refresh();
      router.push('/tickets');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-1/2'>
      <label>
        <span>Title</span>
        <input
          required
          onChange={(e) => setTittle(e.target.value)}
          value={title}
          type='text'
        />
      </label>
      <label>
        <span>Body</span>
        <input
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
          type='text'
        />
      </label>
      <label>
        <span>Priority</span>
        <select
          required
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
          type='text'
        >
          <option value='low'>Low Priority </option>
          <option value='mid'>Mid Priority</option>
          <option value='high'>High Priority</option>
        </select>
      </label>

      <button className='btn-primary' disabled={isLoading}>
        {isLoading && <span>Add...</span>}
        {!isLoading && <span>Add Ticket</span>}
      </button>
    </form>
  );
}
