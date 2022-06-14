$(document).ready(function () {


    //요가img
    $(".ion_img").fadeIn(5000, function () { //배경이미지부터 fadeIn
    });

    //fadein 
    $(window).scroll(function () {

        $('#content1').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if (bottom_of_window > bottom_of_object / 2) {
                $(this).animate({
                    'opacity': '1'
                }, 1000);
            }
            $('#content2').each(function (i) {
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                /* 3 */
                if (bottom_of_window > bottom_of_object / 2) {
                    $(this).animate({
                        'opacity': '1'
                    }, 500);
                }
                $(window).scroll(function () {
                    $('#content3').each(function (i) {

                        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                        var bottom_of_window = $(window).scrollTop() + $(window).height();

                        if (bottom_of_window > bottom_of_element) {
                            $(this).animate({
                                'opacity': '1',
                                'margin-left': '0px'
                            }, 500);
                        }

                    });
                });
            });
        });
    });


});