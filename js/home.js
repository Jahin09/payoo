document.getElementById('btn-cashin').addEventListener('click', function(event){
    event.preventDefault();
    const cashInInput = document.getElementById('input-cash-in').value;
    console.log(cashInInput);
    const inputPinNumber = document.getElementById('input-pin-number').value;
    if(inputPinNumber === '1122'){
        console.log('adding money')
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);
        const cashInNumber = parseFloat(cashInInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = cashInNumber + balanceNumber ;
        console.log(newBalance);

        document.getElementById('account-balance').innerText = newBalance ;
        

    }
    else{
        alert('wrong pin...Please try again later')
    }
})