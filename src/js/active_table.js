let menuButts = document.querySelectorAll('.menu__tabs .menu__tab');

menuButts.forEach(item => {
    item.addEventListener('click', () => {
        // Не сильно задумывался о контенте, просто показал способо реализации
        let menuLink = document.querySelectorAll('.menu__dishes a'),
            mainText = document.querySelectorAll('.menu__dishes .main-text'),
            subText = document.querySelectorAll('.menu__dishes .sub-text');


        for (let i = 0; i < menuLink.length; i++) {
            // было бы хорошо менять ссылки, но их нет
            menuLink[i].setAttribute('href', '#');
            if (item.textContent === 'pizza') {
                mainText[i].innerText = 'PIZZA QUATRO STAGIONI . . . . 55,68 USD';
                subText[i].innerText = "Integer ullamcorper neque eu purus euismod";
            }
            else {
                mainText[i].innerText = `${item.textContent} . . . . 32,3 USD`;
                subText[i].innerText = "New subtext";
            }
        }
    })
})