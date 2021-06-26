// Typed
var typed = new Typed('.typed', {
    strings: [" Après une carrière m'ayant fait découvrir plusieurs milieux professionnels et exercés différents métiers; j'ai décidé de me lancer à fond dans l'apprentissage du développement. Depuis plus de deux ans je me forme à PHP et Symfony, Javascript et React js. Plus qu'un avenir professionnel, je me suis découvert une passion, celle de développer."],
    typeSpeed: 20,
});

// TypedTitle
var TypedTitle = new Typed('.typedTitle', {
    strings: ["php", "python", "javascript", "symfony", "django", "react", "wordpress"],
    typeSpeed: 20,
    backSpeed: 0,
    smartBackspace: true, // this is a default
    loop: true

});

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//DARK MODE
// const darkMode = document.getElementById('dark-mode');

// darkMode.addEventListener('change', () => {
//     document.body.classList.toggle('dark');
// })

//AOS

AOS.init();