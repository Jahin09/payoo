document.getElementById('btn-show-cashout').addEventListener('click',function(){
    console.log('show click')
    document.getElementById('cash-out-show').classList.remove('hidden');
    document.getElementById('show-cash_in').classList.add('hidden')
});

document.getElementById('btn-show-cash-in').addEventListener('click',function(){
    document.getElementById('show-cash_in').classList.remove('hidden');
    document.getElementById('cash-out-show').classList.add('hidden')
})