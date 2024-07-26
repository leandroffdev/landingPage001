function mobile() {
    if(menu.style.display == 'none') {
        menu.style.display = 'flex';
        menuClose.style.display = 'none';
    }
    else {
        menu.style.display = 'none';
        menuClose.style.display = 'flex';
    }
    console.log('clicou', menu.style.display);
}
const menu = document.querySelector('.mobile');
const menuClose = document.querySelector('.close');

menu.addEventListener('click', mobile);
menuClose.addEventListener('click', mobile);
