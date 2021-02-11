
import '../App.css';
import { ItemCount} from '../components/itemCount';















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
