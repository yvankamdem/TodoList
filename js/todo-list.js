let tasks = [];
const display = () => {
    const mapped = tasks
    .map(
        (task, index) =>
         `<li class="task"><span>${task}</span><button type="button" onclick="remove(${index})" >X</button></li>`
        )
        .join("");
        document.getElementById("tasks").innerHTML = mapped;
}
function remove(index){
    tasks.splice(index, 1);
    display();
}
function saveTask(){
    const task = document.getElementById("task-input").value;
    tasks = [...tasks, task]
    document.getElementById("task-input").value = "";
    display();
}

