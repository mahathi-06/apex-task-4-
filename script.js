// To-Do App
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  document.getElementById('taskList').innerHTML = tasks.map(
    (t, i) => `<li>${t} <button onclick="removeTask(${i})">Delete</button></li>`
  ).join('');
}

function addTask() {
  const task = document.getElementById('task').value;
  if (task.trim()) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    document.getElementById('task').value = '';
    loadTasks();
  }
}

function removeTask(index) {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  loadTasks();
}

// Product Listing
const products = [
  { name: 'Laptop', category: 'electronics', price: 700, rating: 4.5 },
  { name: 'T-Shirt', category: 'fashion', price: 25, rating: 4.1 },
  { name: 'Smartphone', category: 'electronics', price: 400, rating: 4.7 },
  { name: 'Jeans', category: 'fashion', price: 50, rating: 4.3 }
];

let filteredProducts = [...products];

function displayProducts(items) {
  const container = document.getElementById('productContainer');
  container.innerHTML = items.map(p => `
    <div>
      <h3>${p.name}</h3>
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

window.onload = function () {
  loadTasks();
  displayProducts(products);
}
