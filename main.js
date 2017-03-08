/**
 * Created by dariusstrasel on 3/7/17.
 */

var createTaskButton_element = document.getElementById("createTask");

var createTaskButton_onclick = createTaskButton_element.addEventListener("click", createTask);

function createTask () {
    console.log("createTask() invoked.");
    var taskName_element = document.getElementById("taskName");
    var taskName_value = taskName_element.value;

    // Grab the parent to append the new task into.
    var taskList_element = document.getElementById("tasks");
}