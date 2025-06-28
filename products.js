const products = [
  { name: 'Laptop', category: 'electronics', price: 700, rating: 4.5 },
  { name: 'T-Shirt', category: 'fashion', price: 25, rating: 4.1 },
  { name: 'Smartphone', category: 'electronics', price: 400, rating: 4.7 },
  { name: 'Jeans', category: 'fashion', price: 50, rating: 4.3 }
];

let filteredProducts = [...products];

function displayProducts(list) {
  const container = document.getElementById('productContainer');
  container.innerHTML = list.map(p => `
    <div class="product-card">
      <h4>${p.name}</h4>
      <p>Category: ${p.category}</p>
      <p>Price: $${p.price}</p>
      <p>Rating: ${p.rating}</p>
    </div>
  `).join('');
}

function filterProducts() {
  const category = document.getElementById('categoryFilter').value;
  filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
  displayProducts(filteredProducts);
}

function sortProducts() {
  const sortBy = document.getElementById('sortBy').value;
  filteredProducts.sort((a, b) => a[sortBy] - b[sortBy]);
  displayProducts(filteredProducts);
}
