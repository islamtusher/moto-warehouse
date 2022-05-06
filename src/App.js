import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Inventory from './pages/inventory/Inventory';
import Home from './pages/home/Home';
import Footer from './pages/home/homeComponents/footer/Footer';
import Header from './pages/home/homeComponents/header/Header';
import Login from './pages/login/Login';
import PageNotFound from './pages/notFound/PageNotFound';
import SignUp from './pages/signUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/contact' element={<Footer></Footer>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
