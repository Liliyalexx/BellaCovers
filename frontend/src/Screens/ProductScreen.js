import React, {Component} from "react";
import { Link } from 'react-router-dom';
import data from '../data';


function ProductScreen(props){
  console.log(props.match.params.id);
  const product = data.products.find(x => x._id === props.match.params.id);
  return <div className="details">
  <div>
  <Link to = "/">Back to result</Link>
  </div>
  <div className="details">
<div className="details-image">
<img src={product.image} alt="product"> </img>

</div>
<div className="details-info">
 <ul>
  <li>
    {product.name}
  </li>
 </ul>

</div>
  </div>
  
  </div>
}
export default ProductScreen;