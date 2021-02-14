const express=require('express')
const connectDB=require('./Config/db')
const ProductsRoute=require('./Routes/Products.route')
const app=express()
app.use(express.json());

connectDB()

app.use('/products',ProductsRoute)

const PORT =  3000;

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is running at ${PORT} `);
  }
});