const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
mongoose.connect('mongodb://localhost/google', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to db!'));

autoIncrement.initialize(db);

const productSchema = new mongoose.Schema({
  name: String,
  details: Array,
  images: Array,
  stars: Number,
  review_count: String,
});

productSchema.plugin(autoIncrement.plugin, {
  model: 'Product',
  field: 'productId',
  startAt: 1,
  incrementBy: 1,
});

const Product = mongoose.model('Product', productSchema);

const getProductDataFromDB = async (id) => {
  try {
    const productDataFromDB = await Product.find({productId: id});
    return productDataFromDB;
  } catch (err) {
    console.log('Error getting product data from DB: ', id);
  }
};

module.exports = {Product, getProductDataFromDB};
