const products = [
  {
    name: 'Maria',
    description: 'hairdresser',
    price: 60.0,
  },
  {
    name: 'Julia',
    description: 'Nailstyle',
    price: 40.0,
  },
  {
    name: 'Rita',
    description: 'hairdresser',
    price: 80.0,
  },
];

exports.up = async function(sql) {
  console.log('Inserting products table...');
  await sql`
  INSERT INTO products ${sql(products, 'name', 'description', 'price')};
    `;
};

exports.down = async function(sql) {
  console.log('Deleting products table...');
  await sql`
  DELETE FROM products
  WHERE name in (${products.map(product => product.name)}) 
  `;
};
