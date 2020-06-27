! function() {
    "use strict";
    $(document).ready(function() {
        $(".crypto-list div").on("click", function() {
            if ($(this).hasClass("active")) return !1;
            $(this).addClass("active").siblings().removeClass("active");
        }),
        $(".payment-list div").on("click", function() {
            if ($(this).hasClass("active")) return !1;
            $(this).addClass("active").siblings().removeClass("active");
        })
    })
}();