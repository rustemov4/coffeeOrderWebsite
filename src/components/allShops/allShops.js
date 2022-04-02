import { shopData } from "../shopData/shopData";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Shop } from "../Shop/Shop";
import '../styles/slider.css';
import { useState } from 'react';
import { FaWindowClose,FaArrowLeft,FaArrowRight } from "react-icons/fa";
export const AllShops = () =>{
    const [active,setActive] = useState(false)
    const [index,setIndex] = useState(0);
    const[currentPhoto,setCurrentPhoto] = useState(0);
    const popup = (ind) =>{
        setActive(!active)
        setIndex(ind)
    }
    
    return(
        <div>
            <FaWindowClose className={active ? 'close active' : 'close'} onClick = {() => setActive(false)}/>
            <div className={active ? 'backgroundSlide active' : 'backgroundSlide'} >

            </div>
            <div className= {active ? 'slide active' : 'slide'}>
                <FaArrowLeft className={active ? 'left active' : 'left'} onClick = {() => currentPhoto === 0 ? setCurrentPhoto(shopData.length - 1) : setCurrentPhoto(currentPhoto - 1) }/>
                <img src = {shopData[index].images[currentPhoto]} className = "modal-picture" alt="im"/>
                <FaArrowRight className={active ? 'right active' : 'right'} onClick = {() => currentPhoto === shopData.length -1 ? setCurrentPhoto(0) : setCurrentPhoto(currentPhoto + 1)}/>
            </div>
            <div className="container mt-5">
                    {
                        shopData.map((item) =>(
                            <Shop image = {item.images[0]} location = {item.location} click = {popup} index = {shopData.indexOf(item)} />
                        ))
                    }
            </div>
        </div>
    );
}