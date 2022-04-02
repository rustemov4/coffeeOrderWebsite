import {Button, Card, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/App.css';
import { useDispatch } from 'react-redux';
import { setProducts } from '../../redux/actions/productActions';
export default function Coffee(props){
    const dispatch = useDispatch();
    const addToCart = (product) =>{
        dispatch(setProducts(product))
    }
    return(

        <Col xs ={12} sm={6} md ={4} lg={3} className='mt-3' >
          <Card className='h-100 shadow-sm coffeeCard' >
                <Card.Img className='card-img-top'src = {props.image}/>
                <Card.Body>
                    <Card.Title>
                        {props.name}
                    </Card.Title>
                    <Card.Text>
                        {props.price}
                    </Card.Text>
                    <Button  onClick={()=>addToCart(props.id)}>Add to cart</Button>
                </Card.Body>
        </Card>
        </Col>
    );
}