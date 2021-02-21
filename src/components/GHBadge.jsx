export default function GHBadge(props) {
  const { username, repoName } = props;

  const repoUrl = `https://github.com/${username}/${repoName}`;
  const badgeUrl = `https://img.shields.io/static/v1?label=${username}&message=${repoName}&color=blue&logo=github`;
  const altText = `${username} - repoName`;

  return (
    <a href={repoUrl}>
      <img src={badgeUrl} alt={altText} />
    </a>
  );
}
