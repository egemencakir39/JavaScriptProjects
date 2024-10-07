const vocabulary = [
    {
      english: 'Apple',
      turkish: 'Elma',
    },
    {
      english: 'Car',
      turkish: 'Araba',
    },
    {
      english: 'School',
      turkish: 'Okul',
    },
    {
      english: 'Dog',
      turkish: 'Köpek',
    },
    {
      english: 'House',
      turkish: 'Ev',
    },
    {
      english: 'Book',
      turkish: 'Kitap',
    },
    {
      english: 'Ice cream',
      turkish: 'Dondurma',
    },
    {
      english: 'Tomato',
      turkish: 'Domates',
    },
    {
      english: 'Water',
      turkish: 'Su',
    },
    {
      english: 'Milk',
      turkish: 'Süt',
    },
  ];

  const cards = document.querySelector(".cards");

function createCards(vocabulary){
    for (let index = 0; index < vocabulary.length; index++) {
        const html = `
    <h4 class="head">${vocabulary[index].english}</h4>
    <p class="bodyP filtered">${vocabulary[index].turkish}</p>
    `;
    const li = document.createElement("li");
    li.innerHTML = html;
    li.classList.add("card");
    cards.appendChild(li);        
    }
}
createCards(vocabulary);
const cards1 = document.querySelectorAll("li");
const card = document.querySelector(".card");

cards1.forEach(card => {
    card.addEventListener("click",e=>{
    const bodyp = card.querySelector("p");
    if (bodyp) {
      bodyp.classList.toggle("filtered");
    }
    
    });
    
});
