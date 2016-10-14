$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        var scroll;
        if($(window).scrollTop()==0){
            scroll =  ($target.offset().top)
        }else{
            scroll =  ($target.offset().top)
        }
        $('html, body').stop().animate({
            'scrollTop': scroll
        }, 500, 'swing', function () {
            //window.location.hash = target;
        });
    });
});


// script pour un effet smooth sur le scroll to anchor
