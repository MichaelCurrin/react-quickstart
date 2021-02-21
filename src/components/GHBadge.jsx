export default function GHBadge(props) {
  const { username, repoName } = props;

  const repoUrl = `https://github.com/${username}/${repoName}`;

  return (
    <p>
      GitHub repo:{" "}
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        {username}/{repoName}
      </a>
    </p>
  );
}
