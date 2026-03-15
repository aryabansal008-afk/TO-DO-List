const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");
const heading = document.querySelector("h1");
const addTaskContainer = document.getElementById("add-task-container");

addTask.addEventListener("click", function(){
    let task = document.createElement("div");
    task.classList.add("task");

    let li = document.createElement("li");
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class = "fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class = "fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if(inputTask.value === ""){
        alert('Please enter a task');
    }else{
        taskContainer.appendChild(task);
    }

    inputTask.value= "";

    checkButton.addEventListener("click", function(){
        checkButton.parentElement.classList.toggle("completed");
    })

    deleteButton.addEventListener("click", function(){
        deleteButton.parentElement.style.display = "none";
    })
});

let menuBtn = document.createElement("button");
menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
menuBtn.classList.add("menuBtn");
document.body.appendChild(menuBtn);

let sidebar = document.getElementById("sidebar");
let overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", function(){
    sidebar.classList.toggle("active");
    console.log(sidebar.classList);
    overlay.classList.toggle("active");
});

const allTasksBtn = document.querySelector("#sidebar li:nth-child(1)");
const completedBtn = document.querySelector("#sidebar li:nth-child(2)");
const pendingBtn = document.querySelector("#sidebar li:nth-child(3)");
const clearAllBtn = document.querySelector("#sidebar li:nth-child(4)");

allTasksBtn.addEventListener("click", function(){
    let tasks = document.querySelectorAll(".task");
    tasks.forEach(task=>{
        task.style.display = "flex";
        })
    heading.innerHTML = "";
    addTaskContainer.innerHTML = "";
    addTaskContainer.innerText = "ALL TASKS";
    addTaskContainer.style.fontSize = "40px";
    addTaskContainer.style.fontWeight = "bold";
    addTaskContainer.style.textAlign = "center";
    addTaskContainer.style.fontFamily = "imbue";
    addTaskContainer.style.color ="#0f2b59";
    overlay.classList.remove("active");
    
});

completedBtn.addEventListener("click",function(){
    let tasks = document.querySelectorAll(".task");
    tasks.forEach(task =>{
        if(task.classList.contains("completed")){
            task.style.display = "flex";
        }else{
            task.style.display = "none";
        }
    })
    heading.innerHTML = "";
    addTaskContainer.innerHTML = "";
    addTaskContainer.innerText = "COMPLETED TASKS";
    addTaskContainer.style.fontSize = "40px";
    addTaskContainer.style.fontWeight = "bold";
    addTaskContainer.style.textAlign = "center";
    addTaskContainer.style.fontFamily = "imbue";
    addTaskContainer.style.color ="#0f2b59";
    overlay.classList.remove("active");
});

pendingBtn.addEventListener("click", function(){
    let tasks = document.querySelectorAll(".task");
    tasks.forEach(task =>{
       if(task.classList.contains("completed")){
            task.style.display = "none";
        }else{
            task.style.display = "flex";
        } 
    })
    heading.innerHTML = "";
    addTaskContainer.innerHTML = "";
    addTaskContainer.innerText = "PENDING TASKS";
    addTaskContainer.style.fontSize = "40px";
    addTaskContainer.style.fontWeight = "bold";
    addTaskContainer.style.textAlign = "center";
    addTaskContainer.style.fontFamily = "imbue";
    addTaskContainer.style.color ="#0f2b59";
    overlay.classList.remove("active");
});

clearAllBtn.addEventListener("click", function(){
    taskContainer.innerHTML ="";
    overlay.classList.remove("active");
    sidebar.classList.remove("active");
    heading.innerText = "TODO List";
    addTaskContainer.innerHTML = '<input type = "text" placeholder = "Enter Task" id = "input-task" autofocus><button id="add-task"><i class="fa-solid fa-plus"></i></button></div><div id ="task-container"></div>';  
    window.location.reload();  
});