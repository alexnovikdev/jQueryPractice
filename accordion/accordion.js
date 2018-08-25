$(".accordion-header").on("click", function(e) {
    $(this).siblings().eq(0).slideToggle(1000).toggleClass("active");
    $(this).toggleClass("active");
});
