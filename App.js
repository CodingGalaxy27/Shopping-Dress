import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Portfolio from './Portfolio';
import ShopCategory from './ShopCategory';
import Shpcat from './Shpcat';
import Footer from './shoppingAssets.jsx/Footer';

import men_banner from './shoppingAssets.jsx/banner_mens.png'
import women_banner from './shoppingAssets.jsx/banner_women.png'
import kids_banner from './shoppingAssets.jsx/banner_kids.png'
import Product from './shoppingAssets.jsx/Product';

function App() {
 
 
  return (

    <>
       
    <div className='App'>


      
       {/* <BrowserRouter>
      <Navbar/>
      

<Routes>
  <Route path="/" element={<ShpCat/>}></Route>
  <Route path="/phone" element={<ShopCatergory Category="phone"/>}></Route>
  <Route path="/tv" element={<ShopCatergory category="tv"/>}></Route>
  <Route path="/watch" element={<ShopCatergory category="kids"/>}></Route>
  <Route path="/dress" element={<Product/>}></Route>
 
</Routes>
      
      </BrowserRouter>  */}


<BrowserRouter>

<Portfolio/>
        
<Routes>

  <Route path="/" element={<Shpcat/>}></Route>
  <Route path='/Men' element={<ShopCategory  banner={men_banner}   category="men" />}></Route>
<Route path='/product/:productId' element={<Product />} />

{/*   <Route path=':productId' element={<Product/>}></Route> */}
  <Route path="/watch" element={<ShopCategory banner={women_banner} category="women"/>}></Route>
  <Route path="/dress" element={<ShopCategory banner={kids_banner} category="kid"/>}></Route>
  
</Routes>


<Footer/>
</BrowserRouter>   


</div>

    </>
  );
}

export default App;
