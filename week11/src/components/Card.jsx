function Card({ title, children }) {
  return (
    <article className="mini-card content-card">
      <p className="card-kicker">REUSABLE CARD</p>
      <h3>{title}</h3>
      <div className="card-content">{children}</div>
    </article>
  );
}

export default Card;
