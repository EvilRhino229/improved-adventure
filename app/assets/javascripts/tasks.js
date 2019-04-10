window.addEventListener("load", function() {
  console.log(window)
// Document Object Model
console.log(document);

var heading = document.getElementById("my-heading");
  console.log(heading);
// var headings = document.getElementsByTagName("h1");
var tasks = document.getElementsByClassName("task");
  console.log(tasks);

  heading.innerHTML = "may i have some för lööp";
  heading.addEventListener("click", function() {
  heading.classList.toggle("big-blue-heading");


  });

  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i]
    task.addEventListener("click", function() {
      console.log(task);
      task.style.color = "red"
    });
  }

});