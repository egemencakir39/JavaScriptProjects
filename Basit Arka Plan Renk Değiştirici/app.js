const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const btn1 = document.querySelector(".btn1");
const color =["green",
    "yellow",
    "black",
    "pink",
    "aqua",
    "gray",
    "darkhaki",
];
let sıra = 0;

btn.addEventListener("click",e=>{
    e.preventDefault();
    body.style.backgroundColor = color[sıra];
    sıra++;
    if (sıra == color.length) {
        sıra = 0;   
    }
})

btn1.addEventListener("click",e=>{
    e.preventDefault();
    const randomColor = color[Math.floor(Math.random() * color.length)];
    body.style.backgroundColor = randomColor;
})