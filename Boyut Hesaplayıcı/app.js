const bitrate = document.querySelector("select");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const result = document.querySelector(".result")


btn.addEventListener("click",e=>{
    let min = Number(input.value) * 60;
    let mb = ((Number(bitrate.value) * min) / 8) / 1024;
    result.innerHTML = `Video Boyutu ${mb.toFixed(2)} MB`;
})