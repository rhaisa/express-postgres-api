// create a test suite for the products page
describe('products', () => {
  // test the linkto the single page
  it('it has link to the single page', () => {
    // go to the visit products page url
    cy.visit('http://localhost:3000/products');

    //get the first link element and click on it
    cy.get('[data-cy=product-link-1]').click();

    // Should be on a new URL which includes '/commands/actions'
    // the resultaing URL should include the single product path
    cy.url().should('include', '/products?id=1');
  });
});

describe('product page', () => {
  // test the links to the products page
  it('has link to products page', () => {
    // go to single page URL
    cy.visit('/products?id=1');

    cy.get('[data-cy=products-link]').click();
    // the URL that is cliked equals teh URL intrduced below
    cy.url().should('eq', 'http://localhost:3000/products');
  });
});
