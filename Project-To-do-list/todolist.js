function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("task-list");

  const li = document.createElement("li");

  li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button class="delete-btn" onclick="deleteTask(this)">✕</button>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
}

function toggleComplete(span) {
  span.parentElement.classList.toggle("completed");
}

function deleteTask(button) {
  button.parentElement.remove();
}