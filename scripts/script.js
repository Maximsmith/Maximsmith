// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

var base = 'https://maximsmith.github.io/';

jQuery.address(function(event) {
    if (event.value) {
        // remove active class on all nav links
        $("nav ul li a").removeClass("active");
        // get current link and add active class to it
        $("nav ul li a").each(function() {
            var dataPath = jQuery(this).attr("href").replace(
                base, '');
            $(this).attr("data-path", dataPath);
            if (dataPath == (event.value)) {
                $(this).addClass("active");
            }
        });
    }
});