const {Schema} = require('mongoose')

const orderSchema = new Schema({
    purchaseDate:{
        type: Date,
        default: Date.now
    },

    product:[
        {
        type: Schema.Types.ObjectId,
        ref: 'Product'
        }
    ]
})

module.exports = orderSchema;

