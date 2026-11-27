function ProfileCard({ name, role, email }) {
  return (
    <article className="mini-card profile-demo-card">
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
