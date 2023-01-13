$(window).scroll(function(){
    if($(this).scrollTop() > 500){
        $('.arriba').slideDown(300);
    } else {
        $('.arriba').slideUp(300);
    };
});