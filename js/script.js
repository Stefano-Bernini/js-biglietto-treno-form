let button = document.getElementById('calculate');
document.getElementById('km').value = '';

button.addEventListener('click', function(){
    let km = parseInt(document.getElementById('km').value);
    let age = parseInt(document.getElementById('age').value);
    let name = document.getElementById('name').value;
    
    let discount_perc;
    let price = km * 0.21;

    if(isNaN(km) === false){
        if(age === 1){
            discount_perc = '/';
        }
        else if(age === 0){
            discount_perc = '20%';
            price *= 0.8;
        }
        else{
            discount_perc = '40%';
            price *= 0.6;
        }

        document.getElementById('show_name').innerText = name;
        document.getElementById('show_km').innerText = km;
        document.getElementById('show_discount').innerText = discount_perc;
        document.getElementById('show_price').innerText = price.toFixed(2)+'€';

        document.querySelector('.show_error').innerText = ''
    }
    else{
        document.querySelector('.show_error').innerText = 'Devi inserire i km da percorrere'
    }

    
})

document.getElementById('reset').addEventListener('click', function(){
    document.getElementById('km').value = '';
    document.getElementById('name').value = '';

    document.getElementById('show_name').innerText = '';
    document.getElementById('show_km').innerText = '';
    document.getElementById('show_discount').innerText = '';
    document.getElementById('show_price').innerText = '';

    document.querySelector('.show_error').innerText = ''
})