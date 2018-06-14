var burgerMenu = document.querySelector('.burger_container');
var mainNav = document.querySelector('#mainav ul');

burgerMenu.addEventListener('click', function() {
	if (mainNav.style.display === "none") {
		mainNav.style.display = "block";
	} else {
		mainNav.style.display = "none";
	}
});

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
