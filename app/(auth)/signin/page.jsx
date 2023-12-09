'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import AuthForm from '../AuthForm';

export default function LoginPage() {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    const superbase = createClientComponentClient();
    await superbase.auth.sign();
    console.log(email, password);
  };
  [];
  return (
    <main>
      <h2 className='text-center'>Login</h2>

      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}
