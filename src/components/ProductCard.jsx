import "../scss/productcard.scss";

export default function ProductCard({ data, updateCart}) {
  const imgsrc = {
    backgroundImage: `url(${data.img})`,
  };




  return (
    <div>
      <div className="card">
        <div className="category">{data.category}</div>
        <div className="card-content">
          <div style={imgsrc} className="product-img" alt={data.name} />
          <div className="product-info">
            <div>
              <p className="name">{data.name}</p>
              <p className="id">#{data.id}</p>
            </div>
            <p className="description">{data.description}</p>
            <p className="price">{data.price.toFixed(2)} €</p>
          </div>
          <button className="cartbutton" onClick={() => updateCart(data.price)}>Ajouter au panier</button>
        </div>
      </div>
    </div>
  );
}
