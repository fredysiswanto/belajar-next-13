'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import AuthForm from '../AuthForm';

export default function RegisterPage() {
  const router = useRouter();
  const [err, setErr] = useState('');
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    const superbase = createClientComponentClient();
    const { error } = await superbase.auth.signUp({
      email,
      password,
      // options: {
      //   emailRedirectTo: `${location.origin}/api/auth/callback`,
      // },
    });
    if (error) {
      setErr(error.message);
    }

    // if (!error) {
    //   router.push('/verify');
    // }
    setTimeout(() => {
      console.log('err', err);
    }, 2000);

    // console.log('register', email, password);
  };
  return (
    <main>
      <h2 className='text-center'>Register</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}
