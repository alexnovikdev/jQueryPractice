var btnTop = $(".btn-top");

$(window).on("scroll", function(e) {
    if ($(window).scrollTop() >= 400) {
        btnTop.fadeIn(2000);
    } else {
        btnTop.fadeOut(2000);
    }
});

btnTop.on("click", function(e) {
    $("html, body").animate({
        scrollTop: 0
    }, {
        duration: 1000
    });
});