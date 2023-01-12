const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/product', {
     useNewURlParser: true,
      useUnifiedTopology: true, 
}, () => {
    
    console.log('connected to database')
}) 


//import routes
const productRoutes = require("./routes/routes");



const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);

app.listen(4000, () => console.log("The port is started on 4000"));

console.log()
