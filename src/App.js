import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/navbar/navbar';
import {FaPhoneAlt} from 'react-icons/fa'
import{Routes,Route,BrowserRouter} from 'react-router-dom'
import Main from './components/main/main';
import { ProductListing } from './components/allProducts/allProducts';
import { AllShops } from './components/allShops/allShops';
import Grid from './components/grid/grid';
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
