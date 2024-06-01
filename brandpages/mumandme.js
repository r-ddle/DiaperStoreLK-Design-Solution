const buyBtns = document.querySelectorAll('.btn-primary');
const radioBuyBtn = document.querySelector('.radioBuyBtn');
const radios = document.getElementsByClassName('radio');

radioBuyBtn.addEventListener('click', () => {
    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
});

buyBtns.forEach(buyBtn => {
    buyBtn.addEventListener('click', () => {
        swal({
            icon: 'success', 
            title: 'Added item to cart!'
        });
    });
});