import './card.js';
import './itemListContainer';

export const ItemCount = () => {

    return (
        <>
        <button></button>
        <b>{contador}</b>
        <button onClick={() =>{onAdd(stock)}}>+</button>
        <div>
            <button>Comprar</button>
        </div>

        <button>Comprar</button>
        </>
    );
};

export default ItemCount