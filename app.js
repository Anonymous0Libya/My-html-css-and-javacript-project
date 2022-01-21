let getStartedBtn = document.getElementById('startupBtn'),
    aboutusBtn = document.getElementById('aboutusBtn');


getStartedBtn.addEventListener('mouseenter', function() {
    this.style.color = 'black';
})
getStartedBtn.addEventListener('mouseleave', function() {
    this.style.color = 'rgb(243, 168, 29)';
})

aboutusBtn.addEventListener('mouseenter', function() {
    this.style.color = 'rgb(243, 168, 29)';
})
aboutusBtn.addEventListener('mouseleave', function() {
    this.style.color = 'black';
})


// Change get started page test
function newPage() {
    window.location.assign("getstarted.html");

}

// Scroll detection for glowing lines

alert('working')