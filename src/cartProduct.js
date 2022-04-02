import {Button} from 'react-bootstrap'
import { removeProduct } from './redux/actions/productActions';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
export default function CartProduct(props){
    
    const cart = useSelector((state) => state.allProducts.cart);
    const dispatch = useDispatch();
    const removeProd = (product) =>{
        const unique = cart.find((prod) => prod.quantity > 1 && prod.id=== product.id) ? false : true;
        console.log(unique);
        dispatch(removeProduct(product))
    }
    return(
        <div>
            <div className='d-flex justify-content-between'>
                <img src = {props.image} className = 'w-50 h-50 rounded mt-2 '/>
                <div className='d-flex align-items-center w-100 justify-content-between text-center'>
                    <div className=' w-50'>
                        <p> {props.name}</p>
                        <p>Price: {props.price}$</p>
                    </div>
                    <div>
                        <p>Quantity: {props.quantity}</p>
                        <Button className='btn-danger w-100' onClick={() => removeProd(props.id)}>Delete</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}