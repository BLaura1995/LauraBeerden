$(document).ready(function() {
    //rotate
    $(window).scroll(function() {
        var theta = $(window).scrollTop() / 600 % Math.PI;
        $('#logo').css({ transform: 'rotate(' + theta + 'rad)' });

    });

});