var mybutton = document.getElementById("scroll-to-top");

// Checks position of window if more than 600 shows a button
window.onscroll = function() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

// Clicking button takes user to top of page
mybutton.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});
