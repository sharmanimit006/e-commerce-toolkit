import React  from 'react'
import { useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch,useSelector } from 'react-redux';
import { add } from '../Store/cartSlice';
import {getProducts} from '../Store/productSlice';





const Productlist = () => {
const dispatch= useDispatch();
const {data:products}= useSelector(state => state.products) 
  // const [products,getproducts]=useState([])

  useEffect(() => {
    //dispatch an action from productslice
    dispatch(getProducts());

  //  fetch("https://fakestoreapi.com/products")
  //  .then(data=>data.json())
  //  .then(result=>getproducts(result))
   
  })
  const addTocart=(product)=>{
    //dispatch add action
    dispatch(add(product))
    

  }

  const  cards= products.map(product=>{
    return(
    <div className='col-md-3' style={{marginBottom:"10px"}}>  

     <Card  key={product.id} className="h-100">
      <div className='text-center'>
    <Card.Img variant="top" src={product.image} style={{width:"100px",height:"130px"}} />
    <Card.Body>
    <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
      <Card.Title>Card Title</Card.Title>
     
     
    </Card.Body>
    <Card.Footer style={{background:"white"}}>
    <Button variant="primary" onClick={()=>addTocart(product)}>Add To Cart</Button>
    </Card.Footer>
    </div>
  </Card></div>
  )})
  

  return (
    <div>
    <h1>product dashboard</h1>
      <div className='row'>
        {cards}
      </div>
    </div>
  )
}

export default Productlist;

