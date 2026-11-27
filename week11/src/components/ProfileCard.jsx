function ProfileCard({ name, role, email }) {
  const initials = name.split(/\s+/).map((part) => part[0]).join('').slice(0, 2);

  return (
    <article className="mini-card profile-demo-card">
      <span className="profile-initials" aria-hidden="true">{initials}</span>
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
