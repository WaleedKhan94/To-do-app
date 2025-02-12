const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

// Adding New task to the List
function addTask() {
  if (inputbox.value === "") {
    alert("You Must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputbox.value = "";
  saveData();
}

listcontainer.addEventListener("click", function (event) {
  console.log(event);

  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    saveData();
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listcontainer.innerHTML);
}

function showtask() {
  listcontainer.innerHTML = localStorage.getItem("data");
}

showtask();
