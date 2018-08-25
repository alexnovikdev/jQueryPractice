$(".skillbar").each(function(i, elem) {
    $(this).children().eq(1).animate({
        width: $(this).attr("data-percent")
    }, {
        duration: 3000
    });
});