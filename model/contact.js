const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    email:{type:String},
   contact:{type:Number},
   formtext:{type:String}
  })
  exports.Product = mongoose.model('product', productSchema);
