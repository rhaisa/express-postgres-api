const {
  generateProductsLink,
  generateSingleProductsInformation,
} = require('../utils');

test('generates a product link', () => {
  const product = {
    id: 1,
    name: 'MacBook Pro',
    description: 'Laptop from Apple',
    price: '2400.00',
  };
  expect(generateProductsLink(product)).toBe(
    `${product.id}:<a href="/products?id=${product.id}" data-cy="product-link-${product.id}">${product.name}</a>`,
    // here you can also hard code.
    //`1:<a href="/products?id=1 data-cy="product-link-1">MacBook Pro</a>`;
  );
});

test('generates the single product information', () => {
  const product = {
    id: 5,
    name: 'chair',
    description: 'chair from Apple',
    price: '2400.00',
  };
  expect(generateSingleProductsInformation(product)).toMatchSnapshot();
});

// expect(generateSingleProductsInformation(product)).toBe(
//   product.id +
//     ': ' +
//     product.name +
//     '<br/>' +
//     product.description +
//     '<br/><a href="/products" data-cy="products-link">Back to Products </a>',
// );
