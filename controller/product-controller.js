const Product = require("../Model/ProductsSchema")

const getProducts = async (req,res)=>{
    try{
         const products = await Product.find({})
         res.json(products)
    }catch(error){
        console.log("Error",error.message);
    }
}

const getProductById = async (req,res) => {
    try{
         const product = await Product.findOne({'id':req.params.id});
         res.json(product)
    }catch(error){
         console.log("Error",error.message)
    }
}

module.exports = {getProducts,getProductById}
