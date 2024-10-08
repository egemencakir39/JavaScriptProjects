const input = document.querySelector(".input");
const workSelect = document.querySelector(".workSelect");
const workSelectOption = document.querySelector(".workSelectOption");
const personalOpt = document.querySelector(".personalOpt");
const workOpt = document.querySelector(".workOpt");
const otherOpt = document.querySelector(".otherOpt");




input.addEventListener("submit" ,e=>{
    e.preventDefault();
    const inpVal = input.inp.value;
    if (inpVal.trim()) {
        const html = `<h4 class="del">${inpVal}<h4/>`;
        const li = document.createElement("li");
        li.classList.add("list");
        li.innerHTML = html;
        input.reset();

        if (workSelect.value === "personal") {
            personalOpt.appendChild(li);
        }
        else if(workSelect.value === "work"){
            workOpt.appendChild(li);
        }
        else{
            otherOpt.appendChild(li);
        }
        
    }
})
document.addEventListener("click", e => {
    e.preventDefault();
    if (e.target.classList.contains("del")) {
        e.target.parentElement.remove();
    }
})

