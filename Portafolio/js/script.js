document.querySelectorAll('a[hrefʌ="#"]').forEach(anchor => {
    anchor.addEventListener('click',function (e) {
        e.preventDeafault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top:target.offsetTop-document.querySelector('header').offsetHeight,
            behavior:'smooth'
        });
    });
});