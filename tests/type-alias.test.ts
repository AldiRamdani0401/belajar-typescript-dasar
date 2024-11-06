import {Category, Product} from '../src/type-alias';

describe('Type Alias', function () {
  it('should support in typescript', function () {

    const category: Category = {
      id: '1',
      name: 'Handphone'
    };

    const product: Product = {
      id: '1',
      name: 'Xiaomi Note 7',
      price: 1000,
      category: category
    }

    // product.description = "Second Hand"; /* Error */

    console.info(category);
    console.info(product);

  });
});