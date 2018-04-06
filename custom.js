var windowWidth = $(window).width();
var windowHeight = $(window).height();


$(document).ready(function() {
    $('input:radio').change(function() {
        if ($(this).is(":checked")) {
            $(this).parents('.answerBox').addClass("bordrChecked");
        } else {
            $(this).removeClass("bordrChecked");
        }
    });
    brdPopup();
});
function brdPopup() {
    $(".btnFeedBack input").click(function() {
        $(".brdOverlay, .brdPopup").fadeIn(), $("body, html").animate({
            scrollTop: 0
        }, 500);
    }), $(".closeBtn").click(function() {
        $(".brdOverlay, .brdPopup").fadeOut();
    });
}