const addlist = document.querySelector(".addList");
const list = document.querySelector(".list");
const listChild = document.querySelector(".listChild");
const search = document.querySelector(".searchBox");

addlist.addEventListener("submit", e => {
    e.preventDefault();
    const todo = addlist.add.value;
    if (todo.trim()) {
        const html = ` <li class="listChild">
                <span class="del">${todo}</span>`
            list.innerHTML += html;
            addlist.reset();
    }
})

list.addEventListener("click",e=>{
    e.preventDefault();
    if (e.target.classList.contains("del")) {
        e.target.parentElement.remove();
    }
})

search.addEventListener("keyup",e=>{
    e.preventDefault();
    const data = search.value.trim().toLowerCase();
    Array.from(list.children).filter(todo => !todo.textContent.toLowerCase().includes(data)).forEach(todo => todo.classList.add("filtered"));
    Array.from(list.children).filter(todo => todo.textContent.toLowerCase().includes(data)).forEach(todo => todo.classList.remove("filtered"));
})



const value = [1,2,3];
console.log(value.includes(2));