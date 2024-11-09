// console.log('button cliked')

document.getElementById('login-button').addEventListener('click', function(event){
    event.preventDefault ();
    
 const phoneNumber = document.getElementById('phone-number').value;
 const pinNumber = document.getElementById('pin-number').value;
 console.log(phoneNumber, pinNumber)
// its temporary
if(phoneNumber === '6' && pinNumber === '1122'){
    console.log('your are log in');
    window.location.href = '/home.html'
}
else{
    alert('wrong number or pin');
}
})