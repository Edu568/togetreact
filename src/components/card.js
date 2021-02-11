import "./card.scss";




const card = (product, price) => {
    return (
        <div className="card">
            <p>Producto: {product} </p>
            <p>Precio: {price}</p>
            
            
            
        </div>
    )
}

export default card;
