$(document).ready(function () {
    setTimeout(() => {
        $(".pre-loader").hide();
    }, 2000)

    $("#open").click(function () {
        $("#main-nav").removeClass("hide")
        $("#main-nav").addClass("show")


    })
    $("#close").click(function () {
        $("#main-nav").removeClass("show")
        $("#main-nav").addClass("hide")
        // $("#main-nav").css({
        //     display: "none"
        // })
    })
})