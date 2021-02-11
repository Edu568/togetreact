import "./card.scss";




const card = (product, price, stock) => {
    return (
        <div className="card">
            <p>Producto: {product} </p>
            <p>Precio: {price}</p>
            <p>Stock: {stock}</p>
            
            
            
        </div>
    )
}

export default card;
