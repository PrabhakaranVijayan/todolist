
let button= document.getElementById("btn")
let ini = document.getElementById("todo")
let todos=[]
button.addEventListener("click",()=>{
    displaytodo()
    ini.value=''

})

function displaytodo(){
    if(ini.value.length==0){
        alert("please add task")
        return;    
    }
    
    todos.push(ini.value)
    let createlist= document.createElement("li")
    createlist.style.display="flex"
    createlist.style.justifyContent="space-between"


    let container= document.getElementById("todoItems")
    
    createlist.setAttribute("id",todos.length-1)
    let span= document.createElement("span")
    let add= document.createTextNode(ini.value)
    span.appendChild(add)
    span.style.fontSize="25px"
    let close= document.createElement("span")
    close.setAttribute("id",todos.length-1)
    close.style.fontSize="25px"
    close.style.fontWeight="bold"
    let x= document.createTextNode("X")
    close.appendChild(x)
    createlist.appendChild(span)
    createlist.appendChild(close)
    container.appendChild(createlist)
    console.log(todos)
    span.addEventListener("click",complete)
    close.addEventListener("click",remove)

    function complete(){
        
        if(span.style.textDecoration === "line-through"){
            span.style.textDecoration="none";
        }
        else{
            span.style.textDecoration="line-through"
        }
    }
    function remove(){
        container.removeChild(createlist)
    }
    


}
