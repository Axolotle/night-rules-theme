window.onload = function () {
    console.log('fdsfdsf');
    var elem = document.querySelector('h2');
    if (elem.scrollIntoView === undefined) {
        window.scrollTo(0, document.getElementsByTagName("NAV")[0].offsetHeight);
        console.log('oppppp');
    } else {
        elem.scrollIntoView({behavior: "instant", block: "center"});
    }
}
