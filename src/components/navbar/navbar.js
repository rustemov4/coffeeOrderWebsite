import '../styles/App.css';
import{FaCartPlus} from 'react-icons/fa'
import {HiOutlineMenu} from 'react-icons/hi'
import { useState } from 'react';
import { useSelector } from 'react-redux';
export default function Navbar(){
  const count = useSelector((state) => state.allProducts.count);
  const [active,setActive] = useState(false)
    return(
        <div>
          <div className={active ? 'hidden-menu active' : 'hidden-menu'}>
            <div class = "HListMenu">
              <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/main'>Main</a></li>
                <li>Orders</li>
                <li>Gallery</li>
              </ul>
            </div>
            <div className='hiddenCart'>
              <h2>Total products: {count}</h2>
            </div>
          </div>
          <div class = "nav">
              <div class = "nav-inner">
                <div class = "header">
                    <div class = "logo">
                      <div>logo</div>
                    </div>
                    <div class = "menu">
                      <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/main'>Main</a></li>
                        <li><a href='/allProducts'>Orders</a></li>
                        <li>Gallery</li>
                        <li class = "cart">
                          <FaCartPlus/>
                          <div class = "counter">
                            <p>{count}</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className='burger-menu'>
                      <HiOutlineMenu onClick={() => setActive(!active)}/>
                    </div>  
                </div>
              </div>  
          </div>
        </div>
      );
}