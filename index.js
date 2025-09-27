// Container section
let list = document.querySelector(".list");
let displayInput = document.querySelector(".display-input");

// Task input section
let inputContainer = document.querySelector(".task-input");
let closeInputContainer = document.querySelector(".close");
let inputTask = document.querySelector("input");
let addTask = document.querySelector(".task-add");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderList() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    let newList = document.createElement("li");
    let newRemove = document.createElement("span");

    newList.innerHTML = task;
    newRemove.innerHTML = "X";
    newList.classList.add("list-item");

    newRemove.addEventListener("click", () => {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderList();
    });

    list.appendChild(newList);
    newList.appendChild(newRemove);
  });
}

addTask.addEventListener("click", function () {
  if (inputTask.value.trim() !== "") {
    tasks.push(inputTask.value.trim());
    inputTask.value = "";
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderList();
  }
});

displayInput.addEventListener("click", function () {
  inputContainer.style.display = "block";
});

closeInputContainer.addEventListener("click", function () {
  inputContainer.style.display = "none";
});

renderList();
