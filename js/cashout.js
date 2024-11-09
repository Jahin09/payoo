document.getElementById('btn-cash-out').addEventListener('click', function(event){
   event.preventDefault();
   const cashOutInput = document.getElementById('input-cash-out').value;
console.log(cashOutInput);
const cashOutInputPin = document.getElementById('input-pin-number-cashout').value;
if(cashOutInputPin === '1122'){
    const cashOutBalance = document.getElementById('account-balance').innerText;
    console.log(cashOutBalance)
const cashOutNumb =parseFloat(cashOutInput);
const cashOutNumber = parseFloat(cashOutBalance);

const newCashOutBalace = cashOutNumber - cashOutNumb;
console.log(newCashOutBalace);
document.getElementById('account-balance').innerText = newCashOutBalace;
}
else{
    alert('wrong credit or invalid pin number')
}
})