// smooth scroll
function pageScroll() {
    let e = document.getElementById("getStarted1");
    e.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    });
}