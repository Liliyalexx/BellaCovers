import express from 'express';
import productRoute from './routes/productRoute';
import data from './data';

const app = express();
app.use('/api/products', productRoute);

app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find(x => x._id === productId);
  if (product)
    res.send(product);
  else
    res.status(404).send({ msg: "Product Not Found." })
});

app.get("/api/products", (req, res) => {	
res.send(data.products);
});	

app.listen(config.PORT, () => {console.log("Server started at http://localhost:5000");
});

