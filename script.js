// Show today's date & greeting
let today = new Date();
document.getElementById("date").textContent = today.toLocaleDateString();
document.getElementById("greeting").textContent = "Organize your day, achieve more 🚀";

let totalTasks = 0, completedTasks = 0;

function updateStats() {
  document.getElementById("total").textContent = totalTasks;
  document.getElementById("completed").textContent = completedTasks;
  document.getElementById("pending").textContent = totalTasks - completedTasks;
}

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let dueDateInput = document.getElementById("dueDate");
  let taskText = taskInput.value.trim();
  let dueDate = dueDateInput.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `${taskText} <small>📅 ${dueDate || "No deadline"}</small>`;

  // Complete task
  li.addEventListener("click", () => {
    if (!li.classList.contains("completed")) {
      li.classList.add("completed");
      completedTasks++;
      let historyItem = document.createElement("li");
      historyItem.textContent = li.textContent;
      document.getElementById("historyList").appendChild(historyItem);
    } else {
      li.classList.remove("completed");
      completedTasks--;
    }
    updateStats();
  });

  // Delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    li.remove();
    totalTasks--;
    if (li.classList.contains("completed")) completedTasks--;
    updateStats();
  });

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  totalTasks++;
  updateStats();

  taskInput.value = "";
  dueDateInput.value = "";
}
