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
  inputTask.innerHTML = "";

  tasks.forEach((task, index) => {
    let newList = document.createElement("li");
    let newRemove = document.createElement("span");

    newList.innerHTML = task;
    newList.classList.add("list-item");
    newRemove.innerHTML = "X";

    newRemove.addEventListener("click", () => {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.parse("tasks"));
      renderList();
    });
  });
}
