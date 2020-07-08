
import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function CartScreen(props){
const cart = useSelector(state => state.cart);

const { cartItems } = cart;
const productId = props.match.params.id;
const qty = props.location.search? Number(props.location.search.split("-")[1]):1;
const dispatch = useDispatch();

useEffect(() =>{
  if(productId){
    dispatch( addToCart (productId, qty));
  }
}, [])
return <div>
Cart Screen
</div>
}
export default CartScreen;
