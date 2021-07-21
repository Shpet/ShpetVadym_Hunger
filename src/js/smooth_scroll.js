let hasSmoothScroll = 'scrollBehavior' in document.documentElement.style;

if (!hasSmoothScroll) {
    let smoothLink = document.querySelectorAll('a[href^="#"]');

    smoothLink.forEach((item, index, arr) => {
        let link = item.getAttribute('href');
        if (link !== '#') {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                document.getElementById(link.slice(1)).scrollIntoView({ behavior: 'smooth' });
            })
        }

    })
}