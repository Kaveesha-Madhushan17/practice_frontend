const checkBox1 = document.getElementById("checkbox1");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPal = document.getElementById("payPal");
const submit = document.getElementById("submit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submit.onclick = function(){
    if(checkBox1.checked){
        subResult.textContent = `you are subscribed`;
    }

    else{
        subResult.textContent=`you are not currently subscribed`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = 'you are paying with visa';
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = 'you are paying with Mastercard';
    }
    else if(payPal.checked){
        paymentResult.textContent = 'you are paying with paypal';
    }

}