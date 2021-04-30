const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const controller = require('../database/controllers.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('client/dist'));
// app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/shop/:id', express.static(path.join(__dirname, '../client/dist')));

/*   -_-   */
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
// });

app.get('/shop/product/:id', async (req, res) => {
  try {
    let productId = req.params.id;
    console.log(productId);
    let productData = await controller.getProductData(productId);
    console.log(productData);
    res.send(productData);
  } catch (err) {
    console.log('Error from GET: ', err);
  }
  });


// app.use('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
// });

app.listen(port, () => console.log(`App listening on port: ${port}!`));

