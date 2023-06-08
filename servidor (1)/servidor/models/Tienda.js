const mongoose = require('mongoose');

const TiendaSchema = mongoose.Schema({
    
    departamento: {
        type: String,
        require: true
    },
    distrito: {
        type: String,
        require: true
    },
    cantidad: {
        type: Number,
        require: true
    },
   
});

module.exports = mongoose.model('Tienda', TiendaSchema)