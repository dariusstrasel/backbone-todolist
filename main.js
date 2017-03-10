/**
 * Created by dariusstrasel on 3/7/17.
 */

var createTaskButton_element = document.getElementById("createTask");

var createTaskButton_onclick = createTaskButton_element.addEventListener("click", createTask);

function createTask () {
    if (validFieldValue()) {
        console.log("createTask() invoked.");
        var taskName_element = document.getElementById("taskName");
        var taskName_value = taskName_element.value;

        // Create new task to append from form value.
        var newTask = document.createElement("li");
        var taskContent = document.createTextNode(taskName_value);
        newTask.appendChild(taskContent);


        // Grab the parent container to append the new task into.
        var taskList_element = document.getElementById("tasks");

        // Append task to parent
        taskList_element.appendChild(newTask);
    }
}

function validFieldValue() {
    console.log("validFieldValue() invoked");
    var createTaskButton_element = document.getElementById("taskName");
    console.log(createTaskButton_element.value);
    console.log(createTaskButton_element.value === "");
    if (createTaskButton_element.value === "") {
        console.log("No");
        return false;
    }
    else {
        console.log("Yes");
        return true;
    }
}

function generateTask() {

}

// taskName | deleteButton