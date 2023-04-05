// Selecting Elements from the DOM
const input = document.getElementById("inputbox");
const container = document.getElementsByClassName("container");
const button = document.querySelector(".btn");
const ul = document.querySelector("#task-list");
const count = document.querySelector("#count");

// saving list items to local storage

if (localStorage.getItem("tasks")) {
  ul.innerHTML = JSON.parse(localStorage.getItem("tasks"));
}

// Adding event listener to the Add button

button.addEventListener("click", () => {
  if (input.value.trim() === "") {
    return;
  }
  const listItem = document.createElement("li");
  const text = document.createTextNode(input.value);
  listItem.appendChild(text);
  // creating update button and adding it to the list item
  const updateBtn = document.createElement("button");
  updateBtn.classList.add("update-btn");
  updateBtn.innerHTML = "Update";
  listItem.appendChild(updateBtn);
  // creating delete button and adding it to the list item
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerHTML = "Delete";
  listItem.appendChild(deleteBtn);
  // appending the list item to the ul list
  ul.appendChild(listItem);
  input.value = "";
  // saving the list items to local storage
  localStorage.setItem("tasks", JSON.stringify(ul.innerHTML));
});

// adding event listener to delete button to delete the list itemgit remote add origin https://github.com/parth2187/JS-Basics.git
ul.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
    localStorage.setItem("tasks", JSON.stringify(ul.innerHTML));
  }
});
s;
