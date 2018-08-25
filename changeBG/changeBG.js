$(document).ready(function() {
    var wHeigth = $(window).height();

    $(".slide").height(wHeigth).scrollie({
        scrollOffset: -50,
        scrollingInView: function(elem) {
            var bgColor = elem.data("background");
            $("body").css("background", bgColor);
        }
    });
});