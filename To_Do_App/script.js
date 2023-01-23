var todoBox = document.getElementsByClassName("allNotes")[0];

let tasks = [];
let taskID = 0;

function addToLocal() {
  let task = {};
  task.title = document.getElementById("textInput").value;
  task.status = "pending";
  task.taskID = taskID;
  taskID++;
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  addItem(task);

}

function addItem(task) {

  var textInput = task.title;

  var newDiv = document.createElement("div");
  newDiv.className = "newDiv";
  var newSpan = document.createElement("span");
  newSpan.innerHTML = textInput;
  newDiv.appendChild(newSpan);
   

  var checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.addEventListener("click", function () {

    if (checkBox.checked == true) {
      newSpan.style.textDecoration = "line-through";
      task.status = "completed";
      localStorage.setItem("tasks", JSON.stringify(tasks));


    }
    else {
      newSpan.style.textDecoration = "none";
      task.status = "pending";
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  })

  if (task.status == "completed") {
    newSpan.style.textDecoration = "line-through";
    checkBox.checked = true;

  }
  else {
    newSpan.style.textDecoration = "none";
    checkBox.checked = false;
  }

  var crossButton = document.createElement("img");
  crossButton.setAttribute("src", "data:image/png;base64,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");

  crossButton.addEventListener("click", function () {
    todoBox.removeChild(newDiv);

    var del = 0;
    tasks.forEach(function (element, index, arr) {
      if (element == task)
        del = index;
    });
    tasks.splice(del, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));

  })

  newDiv.appendChild(checkBox);
  newDiv.appendChild(crossButton);
  todoBox.appendChild(newDiv);

}

function fetchData() {
  if (localStorage.getItem("tasks"))
    tasks = JSON.parse(localStorage.getItem("tasks"));
  else
    tasks = [];

  tasks.forEach(function (task) {
    addItem(task);

  });

}
fetchData();




