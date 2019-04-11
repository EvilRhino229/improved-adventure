window.addEventListener("load", function() {
  console.log(window)
// Document Object Model
console.log(document);

var heading = document.getElementById("my-heading");
  console.log(heading);
// var headings = document.getElementsByTagName("h1");
var tasks = document.getElementsByClassName("task");

// querySelector
var taskButton = document.querySelector("#task-button");
var taskList = document.querySelector("#task-list");
var contentField = document.querySelector("#name");

  heading.innerHTML = "may i have some för lööp";
  heading.addEventListener("click", function() {
  heading.classList.toggle("big-blue-heading");


  });

  for (var i = 0 ; i < tasks.length; i++) {
    var task = tasks[i]
    
    task.addEventListener("click", function() {
      event.target.classList.toggle("completed");
    });
  }

  taskButton.addEventListener("click", function() {
    var newTask = document.createElement("li");
    newTask.innerHTML = contentField.value;
    contentField.value = "";
    taskList.appendChild(newTask);
    newTask.addEventListener("click", function() {
      event.target.classList.toggle("completed");
    });
  });
});