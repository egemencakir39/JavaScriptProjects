const boxes = document.querySelector(".boxes");

const color =[
    "red",
    "green",
    "yellow",
    "pink",
    "purple",
]

createbox(255);
function createbox(count){
    for (let index = 0; index < count; index++) {
        const element = document.createElement("div")
        element.classList.add("box");
        boxes.appendChild(element);
    }
}
const boxs = document.querySelectorAll(".box")

boxs.forEach(box => {
    box.addEventListener("mouseover",e=>{
        const randomColor = Math.round(Math.random() * color.length);
        box.style.backgroundColor = color[randomColor];
    })
    box.addEventListener("mouseover",e=>{
        setTimeout(e=>{box.style.backgroundColor = "grey";},3000);
    })
    
});