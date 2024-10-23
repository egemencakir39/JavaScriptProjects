const addlist = document.querySelector(".addList");
const list = document.querySelector(".list");
const listChild = document.querySelector(".listChild");
const search = document.querySelector(".searchBox");
document.addEventListener("DOMContentLoaded",pageLoaded);
let todos = [];

    
addlist.addEventListener("submit", e => {
    e.preventDefault();
    let todo = addlist.add.value;
    if (todo.trim()) {
        const html = ` <li class="listChild">
                <span class="del">${todo}</span>`
            list.innerHTML += html;
            addTodoStorage(todo);
            addlist.reset();
    }
    
})

function pageLoaded(){
    checkTodosFromStorage();
    todos.forEach(todo1 => {
        html = ` <li class="listChild">
        <span class="del">${todo1}</span>`
    list.innerHTML += html;
       
    });
}


list.addEventListener("click",e=>{
    e.preventDefault();
    if (e.target.classList.contains("del")) {
        const tododel = e.target.parentElement;
        tododel.remove();
        removeTodoStorage(tododel.textContent);
    }
})
function removeTodoStorage(removeTodo){
    checkTodosFromStorage();
    todos.forEach(function(todo,index){
        if (removeTodo.trim()===todo.trim()) {
            todos.splice(index,1);
        }
            
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}

search.addEventListener("keyup",e=>{
    e.preventDefault();
    const data = search.value.trim().toLowerCase();
    Array.from(list.children).filter(todo => !todo.textContent.toLowerCase().includes(data)).forEach(todo => todo.classList.add("filtered"));
    Array.from(list.children).filter(todo => todo.textContent.toLowerCase().includes(data)).forEach(todo => todo.classList.remove("filtered"));
})

function addTodoStorage(newtodo){
    checkTodosFromStorage();
    todos.push(newtodo);
    localStorage.setItem("todos",JSON.stringify(todos));

}
function checkTodosFromStorage(){
    if (localStorage.getItem("todos")===null) {
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}
