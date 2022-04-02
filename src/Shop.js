import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Row } from 'react-bootstrap';
import { FaSearchPlus } from 'react-icons/fa';
import './shop.css'
export const Shop = (props) =>{
    return(
        <Row className='mt-2 bg-light row p-1 shadow-sm rounded d-flex align-items-center'>
            <Col className='d-flex '>
                <div className='w-75'>
                    <div className='d-flex'>
                        <div className='imageDiv'>
                            <div className='black' onClick = { () => props.click(props.index)}></div>
                            <FaSearchPlus className='search'/>
                            <img className='picture' src = {props.image}/>
                        </div>
                        <div className='title'>
                            <h5 className='title-name'>CoffeeSHOP Express</h5>
                            <p>{props.location}</p>
                        </div>
                    </div>
                </div>
                <div className='mr-5 w-25'>
                    <p>Contacts</p>
                    <h5>+7-776-296-89-06</h5>
                    <p>Graphic of work</p>
                    <h5>11:00-24:00</h5>
                </div>
            </Col>
        </Row>
    );
}