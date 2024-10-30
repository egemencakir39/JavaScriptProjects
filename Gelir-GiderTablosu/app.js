const inp1 = document.querySelector(".inp1");
const inp2 = document.querySelector(".inp2");
const incomeBtn = document.querySelector(".income");
const expenseBtn = document.querySelector(".expense");
const expenseList = document.querySelector(".expense-list");
const incomeList = document.querySelector(".incomes-list");
const expenseli = document.querySelectorAll(".expense-list li");

incomeBtn.addEventListener("click",e=>{
    e.preventDefault();
    if (inp1.value.trim()) {
        let html = `<li> Tutar:${inp1.value} TL Açıklama:${inp2.value}</li>`
        incomeList.innerHTML += html;
        inp1.value = "";
        inp2.value = "";

        
    }
})

expenseBtn.addEventListener("click",e=>{
    e.preventDefault();
    if (inp1.value.trim()) {
        let html = `<li> Tutar:${inp1.value} TL Açıklama:${inp2.value}</li>`
        expenseList.innerHTML += html;
        inp1.value = "";
        inp2.value = "";
       
        
    }
})

incomeList.addEventListener("click",e=>{
    e.preventDefault();
    e.target.parentElement.remove();
})
expenseList.addEventListener("click",e=>{
    e.preventDefault();
    e.target.parentElement.remove();
})
