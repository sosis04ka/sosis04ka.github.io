$(document).ready(function() {
	var burger = $('.burger-menu');
	var navigation = $('.navigation');
    var btnTop = $('.button-top');

	burger.click(function(e) {
        e.preventDefault();
        navigation.slideToggle(400);
	});

    $('.panel__heading').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('in').next().slideToggle();
        $('.panel__heading').not(this).removeClass('in').next().slideUp();
    });

    btnTop.click(function(){
        $('html,body').animate({'scrollTop': 0}, 1000);
    });

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 600) {
            btnTop.addClass('active');
        } else {
            btnTop.removeClass('active');
        }
    });
});

