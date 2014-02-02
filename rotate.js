$(function() {
    $(window).on('deviceorientation', function(e) {
        var event = e.originalEvent,
            st = 
                 'rotateY(' + (-event.gamma) + 'deg) ' +
                 'rotateX(' + (event.beta) + 'deg)' +
                 'rotateZ(' + (event.alpha-180) + 'deg) ',
            tf1 = st + '',
            tf2 = st + 'rotateX(90deg) ',
            tf3 = st + 'rotateY(90deg) ';
        $('#rotateable1').css({
            '-webkit-transform': tf1
        });
        $('#rotateable2').css({
            '-webkit-transform': tf2
        });
        $('#rotateable3').css({
            '-webkit-transform': tf3
        });
    })
});
