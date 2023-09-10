document.querySelector("#push").onclick = function(){
    // validating the input
    if(document.querySelector("#newtask input").value.length == 0)
    {
        alert("Please enter a task")
    }
    else{
        document.querySelector('#tasks').innerHTML
        += 
        ` <div class= "task">
        <span id = "taskname">
            ${document.querySelector('#newtask input').value}
        </span>
        <button class = "delete"><i class="fa fa-trash" aria-hidden="true"></i></button>
        </div>
        `;

    }
    // Deleting a task
    var current_tasks = document.querySelectorAll(".delete")
    for(var i = 0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
            this.parentNode.remove()
        }
    }
    // Slashing a completed task
    var task = document.querySelectorAll(".tasks");
    for (var i =0; i,tasks.length; i++){
        tasks[i].onclick = function(){
            this.classList.toggle("completed")
        }
    }
    document.querySelector("#newtask input").value = " "
}

