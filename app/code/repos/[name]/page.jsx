import Repo from '../../../components/Repo';

import RepoDir from '../../../components/RepoDir';
import Loading from '../../../loading';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function RepoPage({ params: { name } }) {
  return (
    <div className='card'>
      <Link href={'/code/repos'} className='btn btn-back'>
        Back to Repositories
      </Link>
      <Suspense>
        <Repo name={name}></Repo>
      </Suspense>
      <Suspense fallback={<div>Loading ...</div>}>
        <RepoDir name={name}></RepoDir>
      </Suspense>
    </div>
  );
}
