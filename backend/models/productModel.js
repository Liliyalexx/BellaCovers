import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  category: {type: String, required: true},
  image: {type: Boolean, default: true, required: true},
  price: {type: Number, required: true},
  size: {type: Number, required: true},
  rating: {type: Number, required: true},
  numReviews: {type: Number, requared: ftrue},
  countInStock: {type: Number, required: true}

}, {
  timestamps: true,

}
);    

const Product = mongoose.model('Product', productSchema);

export default Product;