import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Inventory from './pages/inventory/Inventory';
import Home from './pages/home/Home';
import Header from './sharedComponents/header/Header';
import Login from './pages/login/Login';
import PageNotFound from './pages/notFound/PageNotFound';
import SignUp from './pages/signup/SignUp';
import ManageInventory from './pages/manageInventory/ManageInventory';
import MyItems from './pages/myItems/MyItems';
import AddItems from './pages/addItems/AddItems';
import Blogs from './pages/blogs/Blogs';
import Collections from './pages/homeComponents/collections/Collections';
import Services from './pages/homeComponents/services/Services';
import Contact from './pages/contact/Contact';
import RequireAuth from './requireAuth/RequirAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>}>
        </Route>
        <Route path='/manageInventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>}>
        </Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>}>
        </Route>
        <Route path='/additems' element={<AddItems></AddItems>}></Route>
        <Route path='/collection' element={<Collections></Collections>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
