import "./navbar.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const Navbar = () => {
  return (
    <>
   <nav className="navigation">
     <div className="logo">To Get</div>
     <span class="menu-icon"></span>
      <nav class="navigation">
        <ul className="show">
          <li><a href="index.html">Inicio</a></li>
          <li><a href="equipos.html">Equipos</a></li>
          <li><a href="ingresa.html">Ingresa</a></li>
          <li><a href="registrate.html">Registrate</a></li>
          <li>
            <ShoppingCartIcon/>{""}
          </li>
        </ul>
      </nav>
    </nav>

    
    </>
  );
  
};

export default Navbar