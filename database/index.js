const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/google', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to db!'));

const productSchema = new mongoose.Schema({
  id: mongoose.ObjectId,
  name: String,
  details: Array,
  images: Array,
  stars: Number,
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
