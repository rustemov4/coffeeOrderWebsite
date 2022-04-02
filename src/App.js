import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Grid from './grid';
import Navbar from './navbar';
import {FaPhoneAlt} from 'react-icons/fa'
import{Routes,Route,BrowserRouter} from 'react-router-dom'
import Main from './main';
import { ProductListing } from './allProducts';
import { AllShops } from './allShops';
function App() {

  return (
    <div className="App">
      <div className='icon'>
            <div className='phone'>
              <FaPhoneAlt/>
            </div>
      </div>
      <Navbar/>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Grid/>}/>
          <Route path='/main' element = {<Main/>}/>
          <Route path='/allProducts' element = {<ProductListing/>}/>
          <Route path='*' element = {<Main/>}/>
          <Route path='shops' element= {<AllShops/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}
export default App;
