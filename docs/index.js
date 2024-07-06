
let button= document.getElementById("btn")
let ini = document.getElementById("todo")
let todos=[]
// localStorage.setItem(todos)
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
    createlist.setAttribute("class","mytasks")
    createlist.setAttribute("class","mb-3")
    let span= document.createElement("span")
    let add= document.createTextNode(ini.value)
    span.appendChild(add)
    let close= document.createElement("span")
    close.setAttribute("id",todos.length-1)
     
    let x= document.createElement("div")
    x.style.display="flex"
    x.style.justifyContent="space-between"
    let edit= document.createElement("img")
    edit.setAttribute("src","edit-solid-24.png")
    let y= document.createElement("img")
    y.setAttribute("src","trash-regular-24.png")
    close.appendChild(y)
    x.appendChild(edit)
    x.appendChild(close)
    createlist.appendChild(span)
    createlist.appendChild(x)
    createlist.style.borderStyle="groove"
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
    function edittodo(){

    }
    


}
