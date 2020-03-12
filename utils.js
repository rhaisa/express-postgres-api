function generateProductsLink(product) {
  return `${product.id}:<a href="/products?id=${product.id}" data-cy="product-link-${product.id}">${product.name}</a>`;
}

function generateSingleProductsInformation(product) {
  return (
    product.id +
    ': ' +
    product.name +
    '<br/>' +
    product.description +
    '<br/><a href="/products" data-cy="products-link">Back to Products </a>'
  );
}
module.exports = {
  generateProductsLink,
  generateSingleProductsInformation,
};
