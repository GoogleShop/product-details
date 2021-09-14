const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const cors = require('cors');
const controller = require('../database/controllers.js');

app.use(cors());
app.use(express.static('client/dist'));
app.use('/shop/:id', express.static(path.join(__dirname, '../client/dist')));

app.get('/shop/product/:id', async (req, res) => {
  try {
    let productId = req.params.id;
    let productData = await controller.getProductData(productId);
    res.send(productData);
  } catch (err) {
    console.log('Error from GET: ', err);
  }
  });


app.listen(port, () => console.log(`App listening on port: ${port}!`));

