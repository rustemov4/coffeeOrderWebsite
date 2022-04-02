import Coffee from '../card/card';
import { data } from '../data/data';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css';
export default function Grid(){
    
    return(
       <Container className='mt-5'>
            <Row>
                {data.map((item) => (
                    <Coffee image = {item.image} name = {item.name} price = {item.price} id = {item}/>
                    ))} 
            </Row>
       </Container>
    );
}