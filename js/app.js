

$(document).ready(function(){
	$('input#item').on('keydown', function(e) {
	    if (e.which == 13) {
	       $("button#add").click();
	    }
	  });
	$("button#add").on("click", function() {

		if ($("input#item").val()) {
		var itemToAdd = $("input#item").val();
		$("ul.toget").append("<li class='added'><i id='uncheck' class='fa fa-square-o'></i><span> "+itemToAdd+" </span><i id='trash' class='fa fa-trash-o'></i></li>");
		};

		$("input#item").val("").focus();
 	});


	$('ul.toget').delegate('li','click',function() {
		$(this).toggleClass('clicked');
		if ($(this).children('i#uncheck').hasClass('fa-square-o')) {
			$(this).children('i#uncheck').removeClass('fa-square-o');
			$(this).children('i#uncheck').addClass('fa-check-square-o');
		} else if ($(this).children('i#uncheck').hasClass('fa-check-square-o')) {
			$(this).children('i#uncheck').addClass('fa-square-o');
			$(this).children('i#uncheck').removeClass('fa-check-square-o');
		};
	});
	$('ul.toget').delegate('li i#trash','click',function() {
		$(this).parent("li").remove();
	});


});
