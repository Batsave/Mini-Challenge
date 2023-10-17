
//Styles
import "../scss/cart.scss";


export default function Cart({ globalCart, setGlobalCart}) {
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
                    

                </div>

            </div>


        </main>
    );
};
