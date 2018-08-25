$(".next").on("click", function(e) {
    var currentImage = $(".img.cur");
    var currentImageIndex = currentImage.index();
    var nextImageIndex = currentImageIndex + 1;
    var nextImage = $(".img").eq(nextImageIndex);
    currentImage.fadeOut(1000);
    currentImage.removeClass("cur");

    if (nextImageIndex == ($(".img:last").index() + 1)) {
        $(".img").eq(0).fadeIn(1000);
        $(".img").addClass("cur");
    } else {
        nextImage.fadeIn(1000);
        nextImage.addClass("cur");
    }
});

$(".prev").on("click", function(e) {
    var currentImage = $(".img.cur");
    var currentImageIndex = currentImage.index();
    var prevImageIndex = currentImageIndex - 1;
    var prevImage = $(".img").eq(prevImageIndex);
    currentImage.fadeOut(1000);
    currentImage.removeClass("cur");

    if (prevImageIndex == -1) {
        $(".img").last().fadeIn(1000);
        $(".img").last().addClass("cur");
    } else {
        prevImage.fadeIn(1000);
        prevImage.addClass("cur");
    }
});