// function que adiciona tarefa
function addTask() {
     // titulo da tarefa
     const taskTitle = document.querySelector("#task-title").value;

     if(taskTitle) {

        // clona template 
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        // adiciona titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        // remover as classes bode
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

          // adiciona tarefa na lista
     const list = document.querySelector("#task-list");

     list.appendChild(newTask);

     // adcionar o evento de remover 
     const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
        removeTask(this);
     });

     // adicionar evento de completar tarefa 
     const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
      completeTask(this);
     });

     // limpar texto
     document.querySelector("#task-title").value="";
     } 
};

// function de remover tarefa
function removeTask(task) {
   task.parentNode.remove(true);
}

// function de completar tarfe
function completeTask(task) {
    
    const taskToComplete = task.parentNode

    taskToComplete.classList.toggle("done");
}
// evento de adicionar tarefa
const addbtn = document.querySelector("#add-btn");

addbtn.addEventListener("click", function(e){
 
    e.preventDefault();
    
    addTask();

});