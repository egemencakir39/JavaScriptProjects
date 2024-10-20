const input = document.querySelector(".input");
const button = document.querySelector(".btn");
const tax = document.querySelector(".tax");
const totalPrice = document.querySelector(".totalPrice")


button.addEventListener("click",e=>{
    e.preventDefault();
    let formValue = parseFloat(input.inp.value);
    let tax1 = parseFloat(tax.value);
    let total = (formValue * tax1) / 100;
    let kdvH = (formValue / (1 + tax1 / 100)).toFixed(2);
    let kdvTutar = (formValue - kdvH).toFixed(2);
    console.log(tax1);
    totalPrice.innerHTML = `<p class="title">Girdiğiniz tutar KDV hariç net tutar ise</p>
                            <p>KDV tutarı ${total} TL</p>
                            <p>Toplam Tutar${formValue + total} TL</p>
                            <p class="title">Girdiğiniz tutar KDV Dahil net tutar ise</p>
                            <p>KDV hariç tutar: ${kdvH} TL</p>
                            <p>KDV tutarı: ${kdvTutar} TL</p>
                            <p>Toplam Tutar: ${formValue} TL</p>`;
})
input.addEventListener("submit",e=>{
    e.preventDefault();
})
