
import * as React from "react";
import productlist from "../../moks/productlist"

const itemListContainer = {()} => {
    const [products, setProducts] = React.useState([])
    
    React.useEffect(() => {
    const mypromise =  new Promise(resolve, reject) => {
        setTimeout(() => resolve(productlist), 5000);
    });
    mypromise.then(result) => setProducts(result)
        
        
    return (
            <div>
                <h2>greeting</h2>
            </div>
    );
    };

};

export default itemListContainer;














const itemListContainer = (props) => {
    const [contador, setContador] = useState(1)

    const onAdd = (stock) => {
        if(contador < stock) {
            setContador(contador + 1);

        }else {
            console.log("Stock limite");
        }
    }

    const onSubstract = (stock) => {

    }

    return (
        <>
            <ItemCount stock = {6} contador = {contador}
            onSubstract= {onSubstract} onAdd={onAdd} />
        </>
    )
}

export default itemListContainer;
