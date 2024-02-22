let btnInput = document.querySelector(".btn-success");
let textInput = document.querySelector(".input-txt");
let taskUL = document.querySelector(".task-list");

function addTask(){
    if(textInput.value.trim() === ""){
        alert("Please write something to add.")
    }else{
        let item = document.createElement("li");
        item.innerText = textInput.value;
        
        let delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.classList.add("btn");
        delBtn.classList.add("btn-danger");
        
        item.appendChild(delBtn);
        taskUL.appendChild(item);
        textInput.value = "";
    }
}

textInput.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
})

taskUL.addEventListener("click",function(event){
    let delTask = event.target.parentElement;
    if(event.target.nodeName == "BUTTON"){
        delTask.remove();
    }
});


btnInput.addEventListener("click",addTask);
