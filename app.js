const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Agregar tarea
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Por favor, ingresa una tarea válida.');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <div class="task-actions">
      <button class="complete-btn">✅</button>
      <button class="delete-btn">❌</button>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = '';

  // Completar tarea
  li.querySelector('.complete-btn').addEventListener('click', () => {
    li.classList.toggle('completed');
    checkAllTasksCompleted();
  });

  // Eliminar tarea
  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
    checkAllTasksCompleted();
  });
});

// Comprobar si todas las tareas están completadas
function checkAllTasksCompleted() {
  const tasks = document.querySelectorAll('#taskList li');
  if (tasks.length === 0) return;

  const allCompleted = Array.from(tasks).every(task => task.classList.contains('completed'));
  if (allCompleted) {
    setTimeout(() => {
      alert('🎉 Todas tus tareas fueron realizadas con éxito.');
    }, 100);
  }
}
