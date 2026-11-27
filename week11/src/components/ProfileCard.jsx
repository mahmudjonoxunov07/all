const defaultAvatar =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><rect width="80" height="80" fill="#e2e5e1"/><circle cx="40" cy="30" r="14" fill="#626862"/><path d="M12 80c2-18 14-28 28-28s26 10 28 28" fill="#626862"/></svg>',
  );

function ProfileCard({ name, role, email, avatarUrl = defaultAvatar }) {
  return (
    <article className="mini-card profile-demo-card">
      <img className="profile-avatar" src={avatarUrl} alt="" width="64" height="64" />
      <div>
        <p className="card-kicker">PROFILE</p>
        <h3>{name}</h3>
        <p>{role}</p>
        {email && <a href={`mailto:${email}`}>{email}</a>}
      </div>
    </article>
  );
}

export default ProfileCard;
