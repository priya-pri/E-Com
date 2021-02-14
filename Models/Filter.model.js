const mongoose=require('mongoose')
const filterSchema = new mongoose.Schema({
    "Gender":[{type:String}],
    "Categories":[{type:String}],
    "Brand":[{type:String}],
    "Price":[{type:String}]
})
const Filter = mongoose.model('Filter', filterSchema);
module.exports=Filter;