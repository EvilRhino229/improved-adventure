// = JavaScript "window.addEventListener("load", function() {})"
$(document).ready(function() {
  var $heading = $("#my-heading");
  var $taskButton = $("#task-button");
  var $taskList = $("#task-list");
  var $contentField = $("#name");

  var $token = $('meta[name="csrf-token"]').prop("content");


  $heading.html("bröther may i have some för lööp");
  $heading.on("click", function() {
  $heading.toggleClass("big-heading");
  });

  $taskList.on("click", function() {
    var $currentTask = $(event.target);
    var $taskId = $currentTask.data("id");

    $.ajax({
      url: `/tasks/${$taskId}`,
      type: "put",
      dataTYpe: "json",
      headers: {"X-CSRF-TOKEN": $token},
      success: function() {
        $currentTask.toggleClass("completed");
      },
      error: function() {
        console.log("Something happened. Please exit the exclusion zone via a designated route.");
      }
    });

  });

  $taskButton.on("click", function() {
    event.preventDefault();


    var $newTask = $(`<li>${$contentField.val()}</li>`).hide();
    $taskList.append($newTask);
    $newTask.fadeIn();
    $contentField.val("");

  });
});