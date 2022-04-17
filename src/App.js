import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import CheckOut from './Pages/CheckOut/CheckOut';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';

function App() {
  return (
    <div >
       <Header></Header>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/home' element={<Home></Home>}></Route>
         <Route path='/about' element={<About></About>}></Route>
         <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
         <Route path='/checkout' element={
           <RequireAuth>
             <CheckOut></CheckOut>
           </RequireAuth>
         }></Route>
         <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/register' element={<Register></Register>}></Route>
         <Route path='/blogs' element={<Blogs></Blogs>}></Route>
         <Route path='*' element={<NotFound></NotFound>}></Route>
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
