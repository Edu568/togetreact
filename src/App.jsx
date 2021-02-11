import logo from './logo.svg';
import './App.sncss';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComponent from './components/navbar/';
import itemListContainer from './containers/itemListContainer';
import card from './components/card';



function App () {
  return (
    <div>
      <h2>Hola</h2>
      <p>productos</p>
      <hr/>
      <div className="card-container">
      <card product="Xiaomi" precio="125000"/>
      <card product="Iphone" precio="20000"/>
      <card product="Samsung" precio="150000"/>
      </div>
    </div>
  );
  
};




export default App;
