let incompleteTasks = document.getElementById("incomplete-tasks");
let completedTasks = document.getElementById("completed-tasks");
let completedCount = document.getElementById("completed-count");
let incompleteCount = document.getElementById("incomplete-count");

function addTask() {
    let task = document.getElementById("task").value;
    let time = document.getElementById("time").value;
    if (task === "" || time === "") {
        alert("Please enter a task and expected time.");
    } else {
        let li = document.createElement("li");
        let taskText = document.createTextNode(task);
        let timeText = document.createTextNode(time);
        let span = document.createElement("span");
        let button = document.createElement("button");
        let buttonText = document.createTextNode("Delete");
        span.appendChild(timeText);
        button.appendChild(buttonText);
        button.addEventListener("click", deleteTask);
        li.appendChild(taskText);
        li.appendChild(span);
        li.appendChild(button);
        incompleteTasks.insertBefore(li, incompleteTasks.childNodes[0]);
        document.getElementById("task").value = "";
        document.getElementById("time").value = "";
        updateTaskCount();
    }
}

function deleteTask() {
    let li = this.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
    updateTaskCount();
}

function updateTaskCount() {
    let completedTasksCount = completedTasks.getElementsByTagName("li").length;
    let incompleteTasksCount = incompleteTasks.getElementsByTagName("li").length;
    completedCount.innerHTML = "Tasks completed: " + completedTasksCount;
    incompleteCount.innerHTML = "Tasks to be completed: " + incompleteTasksCount;
}

incompleteTasks.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        let li = e.target;
        li.parentNode.removeChild(li);
        completedTasks.appendChild(li);
        updateTaskCount();
    }
});

completedTasks.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        let li = e.target;
        li.parentNode.removeChild(li);
        incompleteTasks.appendChild(li);
        updateTaskCount();
    }
});