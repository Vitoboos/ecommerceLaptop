import './App.css';
import NavCart from './components/NavCart/NavCart'
import Frontpage from './pages/frontpage/Frontpage';
import Gaming from './pages/gaming/Gaming'
import { Routes, Route } from 'react-router-dom';
import Chromebooks from './pages/chromebooks/Chromebooks';
import Business from './pages/business/Business'
import CartPage from './pages/cart/CartPage';

function App() {
  return (
    <div className="App">
      
          <NavCart tab1='Frontpage' tab2='Gaming' tab3='Chromebooks' tab4='Business' icon='https://cdn-icons-png.flaticon.com/512/3916/3916598.png'/> 

          <Routes>
          
            <Route path='/' element={<Frontpage/>}> </Route>
            <Route path='/gaming' element={<Gaming/>}> </Route>
            <Route path='/chromebooks' element={<Chromebooks/>}> </Route>
            <Route path='/business' element={<Business/>}> </Route>
            <Route path='/cart' element={<CartPage/>}> </Route>

          </Routes>

    </div>
  );
}

export default App;
