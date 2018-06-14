var menu = document.querySelector('#mainav ul');
function menuBurger(x) {
    x.classList.toggle("change");
}

var headerTop = document.querySelector('.headerTop');
var savePosScroll = 133;
document.addEventListener('scroll', function(event) {
    if (document.body.scrollTop > 133) {
        headerTop.classList.add("hiddenHeader");
        if (document.body.scrollTop > savePosScroll) {
            savePosScroll = document.body.scrollTop;
            headerTop.classList.remove("visibleHeader");
        } else {
            headerTop.classList.add("visibleHeader");
            savePosScroll = document.body.scrollTop;
        }

    } else  {
        headerTop.classList.remove("hiddenHeader");
    }

});
