let select = document.querySelectorAll('.booking form select'),
    burger = document.querySelector('.burger-menu'),
    burgerActive = document.querySelector('.burger-menu-active');

select.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active-select');
    })
});

burger.addEventListener('click', () => {
    burgerActive.classList.toggle('burger-menu-active-visible');
});
