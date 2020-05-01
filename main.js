$(document).ready(function() {
    //rotate
    $(window).scroll(function() {
        var theta = $(window).scrollTop() / 600 % Math.PI;
        $('#logo').css({ transform: 'rotate(' + theta + 'rad)' });
        return;
    });
    //Appear
    /* Every time the window is scrolled ... */
    $(window).scroll(function() {

        /* Check the location of each desired element */
        $('.section1').each(function(i) {

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 900);

            }

        });

    });

});