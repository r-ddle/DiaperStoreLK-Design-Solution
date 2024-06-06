var prevScrollpos = window.scrollY;
window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("mobileNavBar").style.bottom = "0"
    } else {
        document.getElementById("mobileNavBar").style.bottom = "-80px"
    }
    prevScrollpos = currentScrollPos
}
