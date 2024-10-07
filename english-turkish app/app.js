const vocabulary = [
    {
        english: "Home",
        turkish: "Ev",
    },
    {
        english: "Car",
        turkish: "Araba",
    },
    {
        english: "Ice Cream",
        turkish: "Dondurma",
    },
    {
        english:"Book",
        turkish:"Kitap",
    },
    {
        english:"Pen",
        turkish:"Kalem",
    },
    {
        english:"Table",
        turkish:"Masa",
    },
    {
        english:"Chair",
        turkish:"Sandalye",
    },
    {
        english:"Door",
        turkish:"Kapı",
    },
    {
        english:"Window",
        turkish:"Pencere",
    },
    {
        english:"School",
        turkish:"Okul",
    },
    {
        english:"Flower",
        turkish:"Çiçek",
    },
    {
        english:"Tree",
        turkish:"Ağaç",
    },
    {
        english:"Moon",
        turkish:"Ay",
    },
    {
        english:"Sea",
        turkish:"Deniz",
    },
    {
        english:"River",
        turkish:"Göl",
    },
    {
        english:"Star",
        turkish:"Yıldız",
    },
    {
        english:"Water",
        turkish:"Su",
    },
    {
        english:"Dog",
        turkish:"Köpek",
    },
];
const cards = document.querySelector(".cards")

function createCards(vocabulary){
    for (let i = 0; i < vocabulary.length; i++) {
        const html = ` 
            <h4>${vocabulary[i].english}</h4>
            <form class="form">
                <input type="text" name="inp">
                <p class="Answer"></p>
            </form>
            `;
        const li = document.createElement("li");
        li.innerHTML = html;
        li.classList.add("card");
        cards.appendChild(li);
    }
}
createCards(vocabulary);

const input = document.querySelectorAll(".form");



input.forEach((form,index) =>{
    form.addEventListener("submit",e=>{
        e.preventDefault();
        console.log(index);
    
        const valueData = form.inp.value;
        const relatedVocabulary = vocabulary[index];
        const answerElement = form.querySelector(".Answer");
        

        if (valueData.toLowerCase() === relatedVocabulary.turkish.toLowerCase()) {
            console.log("doğru");
            let text = `Doğru Cevap`;
            answerElement.innerHTML = text;
            answerElement.classList.add("correct");
            answerElement.classList.remove("false");
        }
        else{
            console.log("yanlıs");
            let text = `Yanlış cevap`;
            answerElement.innerHTML = text;
            answerElement.classList.add("false");
            answerElement.classList.remove("correct");
        }
        
        form.reset();
    })
   
})

