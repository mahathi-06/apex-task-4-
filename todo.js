function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  document.getElementById('taskList').innerHTML = tasks.map(
    (task, i) => `<li>${task} <button onclick="removeTask(${i})">Delete</button></li>`
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
