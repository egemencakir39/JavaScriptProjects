const dateofday = document.getElementById("dateOfBirth");
const buton = document.getElementById("Hesapla");
const Sonuc = document.querySelector(".mins");
const Sonuchours = document.querySelector(".hours");
const Sonucday = document.querySelector(".days");
const SonucYear = document.querySelector(".year");

buton.addEventListener("click",e=>{
    e.preventDefault();
 
    const nowDate = new Date();
    const birthDate = new Date(dateofday.value);
    const diff = nowDate.getTime() - birthDate.getTime();
    const mins = Math.round(diff/1000/60);
    const hours = Math.round(mins/60);
    const days = Math.round(hours/24);
    const year = Math.round(days/365);

    if (isNaN(diff) || year <= 0) {
        Sonuc.innerHTML = "Hata!! Lütfen Gerçek bir tarih giriniz.";
        Sonuchours.innerHTML = "";
        Sonucday.innerHTML = "";
        SonucYear.innerHTML = "";

    }
    else{
        Sonuc.innerHTML = `Doğduğunuz günden itibaren bugüne kadar geçen dakika: ${mins}`;
        Sonuchours.innerHTML = `Doğduğunuz günden itibaren bugüne kadar geçen saat: ${hours}`;
        Sonucday.innerHTML = `Doğduğunuz günden itibaren bugüne kadar geçen gün: ${days}`;
        SonucYear.innerHTML = `Doğduğunuz günden itibaren bugüne kadar geçen sene: ${year}`;
    }
    
})