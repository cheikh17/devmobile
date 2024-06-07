function ajouterTache() {
  const taskInput = document.getElementById("task");
  const taskList = document.getElementById("taskList");
  const taskListDone = document.getElementById("taskListDone");

  if (taskInput.value) {
    const newTaskItem = document.createElement("li");
    newTaskItem.innerHTML = taskInput.value;
      
      
    $(newTaskItem).on("swiperight", function () {
      $(this).toggleClass("terminer");
      if ($(this).hasClass("terminer")) {
        taskListDone.appendChild(this);
      } else {
        taskList.appendChild(this);
      }
      $(taskList).listview("refresh");
      $(taskListDone).listview("refresh");
    });
      
      
    $(newTaskItem).on("swipeleft", function () {
      $(this).hide("slow", function () {
        $(this).remove();
      });
    });

    taskList.appendChild(newTaskItem);
    $(taskList).listview("refresh");
    taskInput.value = "";
  }
}

function reinitialiserTache() {
  const taskList = document.getElementById("taskList");
  const taskListDone = document.getElementById("taskListDone");
  taskList.innerHTML = "";
  taskListDone.innerHTML = "";
}
