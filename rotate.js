$(function() {
    $(window).on('deviceorientation', function(e) {
        var event = e.originalEvent,
            tf1 = 
                 'rotateY(' + event.gamma + 'deg)' +
                 'rotateX(' + event.beta + 'deg) ' +
                 'rotateZ(' + event.alpha + 'deg) ',
            tf2 = 
                 'rotateY(' + event.gamma + 'deg)' +
                 'rotateX(' + event.beta + 'deg) ' +
                 'rotateZ(' + event.alpha + 'deg) ' +
                 'rotateX(90deg) ',
            tf3 = 
                 'rotateY(' + event.gamma + 'deg)' +
                 'rotateX(' + event.beta + 'deg) ' +
                 'rotateZ(' + event.alpha + 'deg) ' +
                 'rotateY(90deg) ';
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
