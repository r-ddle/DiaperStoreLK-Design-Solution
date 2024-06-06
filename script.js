document.addEventListener('DOMContentLoaded', function () {
    function isMobile() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    if (isMobile()) {
        window.location.href = './mobile.html';
    } else {
        window.location.href = './pc.html';
    }
});