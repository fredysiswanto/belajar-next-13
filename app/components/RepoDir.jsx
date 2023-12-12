import Link from 'next/link';

async function fecthRepoConntent(name) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(
    `https://api.github.com/repos/fredysiswanto/${name}/contents`
  );
  const contents = await response.json();
  return contents;
}
export default async function RepoDir({ name }) {
  const contents = await fecthRepoConntent(name);
  const dirs = contents.filter((content) => content.type === 'dir');

  // console.log(dirs);
  return (
    <div>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repo/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
