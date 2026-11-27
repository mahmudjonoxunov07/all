function ProductCard({ name, price, rating, inStock }) {
  return (
    <article className={`mini-card product-card${inStock ? '' : ' is-sold-out'}`}>
      <p className="card-kicker">PRODUCT</p>
      <h3>{name}</h3>
      <p className="product-price">₩{price.toLocaleString('ko-KR')}</p>
      <p className="product-rating">
        <span aria-hidden="true">{'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}</span>
        <span>{rating} / 5 stars</span>
      </p>
      <p className="stock-status">{inStock ? 'In stock' : 'Out of stock'}</p>
    </article>
  );
}

export default ProductCard;
