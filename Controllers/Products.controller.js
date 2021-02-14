const Product =require( '../Models/Products.model')
const Filter=require( '../Models/Filter.model')


//getting all products and products by filtercriteria
//http://localhost:3000/products
//http://localhost:3000/products?gender=Women
const getProducts = async (req, res) => {
    try{
        let response = [];
        const products = await Product.find();
   
        if(typeof req.query.category != 'undefined'){
            products.filter(function(product){
                console.log(product.category)
              if(product.category.toString() === req.query.category){
                response.push(product);
              }
            });
          }
          if(typeof req.query.gender != 'undefined'){
            products.filter(function(product){
                 if(product.gender.toString() === req.query.gender){
                response.push(product);
              }
            });
          }
          if(typeof req.query.brand != 'undefined'){
            products.filter(function(product){
            if(product.brand.toString() === req.query.brand){
                response.push(product);
              }
            });
          }
       if(response.length===0){
           response.push(products)
       }
        res.json(response) }
    catch(err){
        console.log(err)
    }
};

//getting product by brand Name
//http://localhost:3000/products/LOCOMOTIVE
const getProductByBrandName = async (req, res) => {
    var query = req.params.brand;
    const product = await Product.find({'brand':query});
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product Not Found');
    }
  };

//getting all filters
//http://localhost:3000/products/filters
const getFilters=async (req, res) => {
    try{
  const filters = await Filter.find();
  res.json(filters)
    }
    catch(err){
        console.log(err)
    }
};


  
module.exports={getProducts,getProductByBrandName,getFilters};