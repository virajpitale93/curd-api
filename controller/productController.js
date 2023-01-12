const { json } = require("express");
const Product = require("../model/Product");

//get all product
const product_all = async (req, res) => { 
    try {
        const product = await Product.find();
        res.json(product);
    }
    catch(error) {
        res.json({ message: 'error' });
    }
};

//single product
const product_details = async (req, res) => { 
    try {
        const singleproduct = await Product.findOne({ _id: req.query.productid });
        console.log(req.query);
        res.send({message: "data send succesfull", data:singleproduct});

     }
    catch (error) {
        res.json({ message: 'error' });
    }
};

//add new product
const product_create = async (req, res) => { 

    try {
        const createproduct = await Product.create({
            name: req.body.name,
            price: req.body.price,
            details: req.body.details
        });
        
        res.json(createproduct);

    } catch (error) {
        console.log(error);
        res.json({ message: 'error' });
    }
    
};


//update product
const product_update = async (req, res) => { 
    try {
        const product = {
            name: req.body.name,
            price: req.body.price,
            details: req.body.details
        };
        const updatedProduct = await Product.findByIdAndUpdate({
            _id: req.params.updateproduct
        },
            product, { new: true }
        );
        res.json(updatedProduct);
    }
    catch (error) {
        console.log(error);
        res.json({ message: 'error' });
    }
};

//delete product
const product_delete = async (req, res) => { 

    try {
        const deleteProduct = await Product.deleteOne({ _id: req.params._id })
        res.json(deleteProduct);
    } catch (error) {
        console.log(error);
        res.json({ message: 'error' });
    }
};


module.exports = {
    product_all,
    product_details,
    product_create,
    product_update,
    product_delete
}