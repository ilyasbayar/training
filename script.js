const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "10px";

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Görevi tamamla
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Görevi sil
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Tıklamanın li olayını tetiklemesini engelle
    li.remove();
  });
  taskInput.value = "";
}
