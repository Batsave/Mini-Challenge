
//Styles
import "../scss/cart.scss";


export default function Cart({ globalCart, count, globalRecap}) {
    const imgsrc = {
        backgroundImage: `url(${globalCart.img})`,
      };

    return (
        <main className="modal-container">
            <div className="modal-content">
                <div className="productList">
                {globalCart.map((globalItem) => (
                
                    <div className="product" key={globalItem.id}>
                        <div className="product-img" style={{ backgroundImage: `url(${globalItem.img})`}} alt={globalItem.name} />
                        <div className="product-info">
                            <div>
                                <p className="name">{globalItem.name}</p>
                                <p className="id">#{globalItem.id}</p>
                            </div>
                            <p className="price">{globalItem.price.toFixed(2)} €</p>
                        </div>
                    </div>
                
                ))}
                </div>
                <div className="Recap">
                    <p className="title">Panier</p>
                    <div className="section">
                    <p className="subtitle">Montant global</p>
                    <p className="price">{globalRecap.toFixed(2)} €</p>
                    </div>
                    <div className="section">
                    <p className="subtitle">Nombre(s) d'article(s)</p>
                    <p className="price">{count}</p>
                    </div>
                    <button className="btn carte">Payer par carte</button>
                    <button className="btn paypal">Payer avec Paypal</button>
                </div>

            </div>


        </main>
    );
};
