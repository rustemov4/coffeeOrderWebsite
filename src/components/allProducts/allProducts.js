import { useSelector } from "react-redux"
import { Container, Row, Col,Button } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import CartProduct from "../cartProduct/cartProduct";
export const ProductListing = () =>{
    const cart = useSelector((state) => state.allProducts.cart);
    const result = cart.reduce((total, currentValue) => total = total + (currentValue.price * currentValue.quantity),0);
    const [total,setTotal] = useState(result);
    useEffect(() =>{
        const result = cart.reduce((total, currentValue) => total = total + (currentValue.price * currentValue.quantity),0);
        setTotal(result);
    });
    return(
        <div>
            <div className="d-flex m-3 align-items-center" style={{height:"10vh",cursor:"pointer"}}>
                <FaAngleLeft style={{fontSize:"23px"}} />
                <p className=" m-0 p-0" style={{fontSize:"20px"}}>Back to catalog</p>
            </div>
            <Container  className='mt-5'>
                <Row>
                    <Col xs ={12} sm={6} md ={6} lg={8} className='mt-3'>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </Col>
                    <Col xs ={12} sm={6} md ={6} lg={4} className='mt-3 d-flex justify-content-center bg-light p-3 rounded flex-column'>
                        <Col xs ={12} sm={12} md ={12} lg={12}>
                            {
                                cart.map((item) =>(
                                    <CartProduct image = {item.image} name = {item.name} price = {item.price} quantity = {item.quantity} id = {item}/>
                                ))
                            }
                        </Col>
                        <hr className="my-4"/>
                        <div>
                            <h2>Total {total}$</h2>
                        </div>
                        <Button className="w-100 mt-3 p-2">Make order</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}