const searchbar = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".ara");
const clearBtn = document.querySelector(".temizle");
const search = document.querySelector(".src");
const İmageList = document.querySelector(".image-item");


searchBtn.addEventListener("click",e=>{
    e.preventDefault();
    const value = search.value.trim();
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method : "GET",
        headers : {
            Authorization : "Client-ID lfx-z1YAB1Mn8zoRmWrbUTCEFZaq-wSs_PQ5-P97Oj8"
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
        const res = data.results;
         res.forEach((img)=>{
            ImageToUI(img.urls.small);
        })
    })
    
    
})
function ImageToUI(url){
    const div = document.createElement("div");
    div.className = "card";

    const img = document.createElement("img");

    img.setAttribute("src",url);
    img.height='400';
    img.width='400';
    div.appendChild(img);
    İmageList.appendChild(div);

}
clearBtn.addEventListener("click",e=>{
    search.value = "";
    Array.from(İmageList.children).forEach((img)=>{
        img.remove();
    })
   
})