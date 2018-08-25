var $tasksList = $("#tasksList");
var $taskInput = $("#taskInput");
var $notification = $("#notification");

var displayNotification = function() {
    if (!$tasksList.children().length) {
        $notification.fadeIn("fast");
    } else {
        $notification.css("display", "none");
    }
}

$("#taskAdd").on("click", function(e) {
    if(!$taskInput.val()) {
        return false;
    }
    $tasksList.append("<li>" + $taskInput.val() + "<button class='delete'>&#10006</button></li>");
    $taskInput.val("");

    displayNotification();
});

$("#tasksList").on("click","button", function(e) {

    console.log("aefwef");
    var $parent = $(this).parent();
    $parent.css("animation", "fadeOut 0.3s linear");

    setTimeout(function() {
        $parent.remove();
        displayNotification();
    }, 300);
});