const { default: Link } = require('next/link');
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

export default async function Repo({ name }) {
  const response = await fetch(
    `https://api.github.com/repos/fredysiswanto/${name}`
  );
  const repo = await response.json();
  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className='card-stats'>
        <div className='card-stat'>
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className='card-stat'>
          <FaCodeBranch />
          <span>{repo.sforks_count}</span>
        </div>
        <div className='card-stat'>
          <FaEye />
          <span>{repo.watchs_count}</span>
        </div>
      </div>
    </>
  );
}
