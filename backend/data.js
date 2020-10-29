 import bcrypt from 'bcryptjs';
 
 const data = {
  users:[
    {
      name: 'Liliya',
      email: 'liliya@example.com',
      password: bcrypt.hashSync('1234', 8), 
      isAdmin: true,
    },
    {
      name: 'Bella',
      email: 'bella@example.com',
      password: bcrypt.hashSync('1234', 8), 
      isAdmin: false,

    },

  ],
  products: [
    {
    
    name: 'Slipcover for Sofa', 
    category: 'Sofas',
    image: '/images/sofa_beige.jpg', 
    price: 40, 
    size: 'Two Seats',
    rating: 4.5, 
    numReviews: 11,
    countInStock: 6,

  },
  {
   
    name: 'Slipcover for Armchair', 
    category: 'Armchairs',
    image: '/images/Viena.jpg', 
    price: 30, 
    size: 'One Seat',
    rating: 4.5, 
    numReviews: 12,
    countInStock: 6,

  },
  {
    
    name: 'Slipcover for chairs', 
    category: 'Chairs',
    image: '/images/Chair.jpg', 
    price: 20, 
    size: 'One Seat',
    rating: 5, 
    numReviews: 13,
    countInStock: 6,

  },
  {
    
    name: 'Slipcover for chairs', 
    category: 'Chairs',
    image: '/images/sofa_beige.jpg', 
    price: 20, 
    size: 'One Seat',
    rating: 5, 
    numReviews: 13,
    countInStock: 6,

  },
  
],
};

export default data;