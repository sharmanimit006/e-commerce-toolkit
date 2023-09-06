import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../Store/cartSlice';

const Cart = () => {
    const products= useSelector(state => state.cart);
    const dispatch= useDispatch();
    const removeToCart=(id)=>{
        //dispatc remove action
        dispatch(remove(id));

    }

    const  cards= products.map(product=>{
        return(
        <div className='col-md-12' style={{marginBottom:"10px"}}>  
    
         <Card  key={product.id} className="h-100">
          <div className='text-center'>
        <Card.Img variant="top" src={product.image} style={{width:"100px",height:"130px"}} />
        <Card.Body>
        <Card.Title>{product.title}</Card.Title>
              <Card.Text>INR: {product.price}</Card.Text>
          <Card.Title>Card Title</Card.Title>
         
         
        </Card.Body>
        <Card.Footer style={{background:"white"}}>
        <Button variant="danger" onClick={()=>{removeToCart(product.id)}}>Remove item</Button>
        </Card.Footer>
        </div>
      </Card></div>
      )})
  return (
    <>
    <div className="row">
        {cards}

    </div>
    {/* <h1>cart</h1>
    {JSON.stringify(productCart)} */}
    </>
  )
}

export default Cart