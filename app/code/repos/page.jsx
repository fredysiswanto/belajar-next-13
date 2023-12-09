// "use client"
import Link from "next/link"
import {FaStar, FaCodeBranch, FaEye} from 'react-icons/fa'

async function fetchRepos(params) {
  const response = await fetch(`https://api.github.com/users/fredysiswanto/repos`)
  const repos = await response.json()
  // console.log(repos);
  return repos
  
}
 export default async  function ReposPage() {
  const repos = await fetchRepos()
  return (
    <div className="repos-containter">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {repos.map((repo)=>{return(
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>

            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <div className="repo-details">
              <span><FaStar/> {repo.stargazers_count}</span>
              <span><FaCodeBranch/> {repo.forks_count}</span>
              <span><FaEye/> {repo.watcher_count}</span>
            </div>
            </Link>
          </li>)
        })}
      </ul>
    </div>
  )
}
