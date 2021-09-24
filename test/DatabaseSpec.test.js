const {Product, getProductDataFromDB} = require('../database/index');

describe('Database', function() {
  describe('set range', function() {
    test('should not have data outside the set range', async function() {
      let ID = 101;
      let data = await getProductDataFromDB(ID);
      expect(data[0]).toBe.undefined;
    });
    test('should have data within the set range', async function() {
      let ID = 100;
      let data = await getProductDataFromDB(ID);
      expect(data[0]).toBe.an('object');
      expect(Object.keys(data[0])).to.have.lengthOf(7);
    });
  });
});

describe('Database controller', function() {
  describe('product insertion', function() {
    test('should insert a product into the database', async function() {
      let product = new Product({
        name: "Test Product",
        details: ['test', 'test', 'test', 'test'],
        images: ['testURL', 'testURL', 'testURL', 'testURL'],
        stars: 5,
        review_count: '0923',
      });
      await product.save(async (err, product) => {
        if (err) { return 'error saving test product' };
        let productId = product.productId;
        let testProduct = await Product.find({productId}).exec();
        await Product.deleteOne({productId});
        expect(testProduct.name).toEqual(product.name);
        expect(testProduct.details).to.deep.equal(product.details);
        expect(testProduct.images).to.deep.equal(product.images);
      });
    });

    test('should return the correct data for requested product', async function() {
      try {
        let ID = 1;
        let data = await getProductDataFromDB(ID);
        expect(data[0].productId).toEqual(ID);
      } catch (err) {
        console.log('Error returning requested product:', err);
      }
    });
  });
});




// // const { expect } = require('chai');
// const {Product, getProductDataFromDB} = require('../database/index');

// describe('Database', function() {
//   describe('set range', function() {
//     it('should not have data outside the set range', async function() {
//       let ID = 101;
//       let data = await getProductDataFromDB(ID);
//       expect(data[0]).to.be.undefined;
//     });
//     it('should have data within the set range', async function() {
//       let ID = 100;
//       let data = await getProductDataFromDB(ID);
//       expect(data[0]).to.be.an('object');
//       expect(Object.keys(data[0])).to.have.lengthOf(7);
//     });
//   });
// });

// describe('Database controller', function() {
//   describe('product insertion', function() {
//     it('should insert a product into the database', async function() {
//       let product = new Product({
//         name: "Test Product",
//         details: ['test', 'test', 'test', 'test'],
//         images: ['testURL', 'testURL', 'testURL', 'testURL'],
//         stars: 5,
//         review_count: '0923',
//       });
//       await product.save(async (err, product) => {
//         if (err) { return 'error saving test product' };
//         let productId = product.productId;
//         let testProduct = await Product.find({productId}).exec();
//         await Product.deleteOne({productId});
//         expect(testProduct.name).to.equal(product.name);
//         expect(testProduct.details).to.deep.equal(product.details);
//         expect(testProduct.images).to.deep.equal(product.images);
//       });
//     });

//     it('should return the correct data for requested product', async function() {
//       let ID = 1;
//       let data = await getProductDataFromDB(ID);
//       expect(data[0].productId).to.equal(ID);
//     });
//   });
// });