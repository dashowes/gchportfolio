$(function() { 
    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	
    $(".gch-book-blurb").hide();
    
    $("#inner-threewomen").click(function() {
        $("#inner-threewomen").addClass("book-clicked");
        $("#blurb-threewomen").fadeIn("fast");
        $("#blurb-threewomen").click(function() {
            $(this).fadeOut("fast");
            $("#inner-threewomen").removeClass("book-clicked");
        });
    });
    
    $("#inner-metropolis").click(function() {
        $("#inner-metropolis").addClass("book-clicked");
        $("#blurb-metropolis").fadeIn("fast");
        $("#blurb-metropolis").click(function() {
            $(this).fadeOut("fast");
            $("#inner-metropolis").removeClass("book-clicked");
        });
    });
    
    $("#inner-wholeoflife").click(function() {
        $("#inner-wholeoflife").addClass("book-clicked");
        $("#blurb-wholeoflife").fadeIn("fast");
        $("#blurb-wholeoflife").click(function() {
            $(this).fadeOut("fast");
            $("#inner-wholeoflife").removeClass("book-clicked");
        });
    });
    
    $("#inner-ruthless").click(function() {
        $("#inner-ruthless").addClass("book-clicked");
        $("#blurb-ruthless").fadeIn("fast");
        $("#blurb-ruthless").click(function() {
            $(this).fadeOut("fast");
            $("#inner-ruthless").removeClass("book-clicked");
        });
    });
});