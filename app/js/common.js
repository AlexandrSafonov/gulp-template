(function ($) {
    $(document).ready(function () {
        window.bw = $("body").width();
        /* Add body class */
        var ua = navigator.userAgent;
        if (getInternetExplorerVersion() > 0) {
            $("body").addClass("ie");
            $("body").addClass("ie" + getInternetExplorerVersion());
        }
        if (ua.search(/Firefox/) > -1)
            $("body").addClass("firefox");
        if (ua.search(/Opera/) > -1)
            $("body").addClass("opera");
        if (ua.search(/Chrome/) > -1)
            $("body").addClass("chrome");
        else if (ua.search(/Safari/) > -1)
            $("body").addClass("safari");
        /* end */

        /* Add li class "parent" if he has childe */
        $(".nav li a").each(function () {
            if ($(this).next().length) {
                $(this).parent().addClass("parent");
                $(this).append("<i class='fa fa-angle-right'></i>");
                $(this).find("i").on("click", function (e) {
                    e.preventDefault();
                    $(this).parent().next().stop(true, true).slideToggle(300);
                });
            }
        });
        /* end */

        /* Bind  click toogleMenu button  */
        $(".toggleMenu").off("click mouseenter mouseleave").on("click", function (e) {
            $(this).next().stop(true, true).fadeToggle(200);
        });
        /* end */

        resizeDoc();
    });
    $(window).on('resize orientationchange', function () {
        resizeDoc();
    });
    function resizeDoc() {
        bw = $("body").width();
        
//        $("header").height($(".header").height());
        $("main").css("min-height", $(window).height() - $("header").height() - $("footer").height());
        
        if (bw <= 991) {
            /* Unbind  navigation hover  */
            if (!$(".nav").hasClass("click")) {
                $(".nav .dropdown").removeAttr("style");

                $(".nav").addClass("click").removeClass("hover");
            }
            /* end */

        } else if (bw > 991) {
            /* Bind navigation hover  */
            if (!$(".nav").hasClass("hover")) {
                $(".nav").removeClass("click");
                $(".nav .dropdown").removeAttr("style");
                $(".toggleMenu").next().removeAttr("style");

                $(".nav").addClass("hover").removeClass("click");
            }
            /* end */
        }
    }

    function getInternetExplorerVersion() {
        var rv = -1;
        if (navigator.appName == 'Microsoft Internet Explorer')
        {
            var ua = navigator.userAgent;
            var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) != null)
                rv = parseFloat(RegExp.$1);
        } else if (navigator.appName == 'Netscape')
        {
            var ua = navigator.userAgent;
            var re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) != null)
                rv = parseFloat(RegExp.$1);
        }
        return rv;
    }

})(jQuery);