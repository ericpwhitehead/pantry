

$(document).ready(function(){

	$("button#add").on("click", function() {

		if ($("input#item").val()) {
		var itemToAdd = $("input#item").val();
		$("ul.toget").append("<li class='added'><i id='uncheck' class='fa fa-square-o'></i><span> "+itemToAdd+" </span><i id='trash' class='fa fa-trash-o'></i></li>");
		
		$("#trash").click(function() {
			$(this).parent("li").remove();
		});

		};
		$("input#item").val("").focus();
 	});


	$('ul').delegate('li','click',function() {
		$(this).toggleClass('clicked');
	});


});
