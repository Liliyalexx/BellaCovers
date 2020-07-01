import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
 

function HomeScreen(props){

  const [products, setProduct] = useState([]);
  useEffect(() => {
   const fetchData = async () => {
     const {data} = await axios.get("/api/products");
     setProduct(data);
   }
    return () =>{
      //
    };

  },[])

  
  return <ul className = "products"> 
  {
    data.products.map (product=> 
  
    <li>
      <div className = "product">
      <Link to={'/product/' + product._id}>
      <img className="product-image" src={product.image} alt="product" />
     </Link>

        <div className="product-name"> 
          <Link to = {'/product/' + product._id} > {product.name} </Link> 
        </div>
        <div className ="product-size"> {product.size}</div>
        <div className ="product-price"> ${product.price} </div>
        <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews) </div>
      </div>
    </li>)

    }

  </ul>
}
export default HomeScreen;