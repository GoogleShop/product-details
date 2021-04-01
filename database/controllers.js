const db = require('./index.js');

const getProductData = async (id) => {
  try {
    const productDataFromDB = await db.getProductDataFromDB(id);
    console.log('get data from DB: ', productDataFromDB);
    return productDataFromDB;
  } catch (err) {
    console.log('Error getting product data from database!');
  }
};

module.exports = {getProductData};