$(document).ready(function() {

	function showModal() {
		$('.overlay').animate({
			opacity: 'toggle'
		}, 1000);
		$('.modal').animate({
			bottom: '+=50',
			height: 'toggle',
			width: 'toggle',
  		}, {
    		duration: 400, 
    		specialEasing: {
    		height: 'swing',
      		width: 'swing'
    		}
  		}).animate({
  			bottom:'-=50'
  		}, 1000);
	};

	$('.main_btna:first').on('click', showModal);
	$('.main_btn:first').on('click', showModal);
	$('a[href="#sheldure"]:eq(1)').on('click', showModal);
	
	$(('.close:first')).on('click', function() {
		$('.overlay').animate({
			opacity: 'toggle'
		}, 1000);
		$('.modal').fadeOut('slow');
	});


	$('.modal').on('submit', function(event){
		event.preventDefault();
	    let formData = $(this).serialize();

	    $.ajax({
	        type: 'POST',
	        url: 'server.php',
	        data: formData,
	        success: function() {
	           	$('.modal').fadeOut('slow');
	            $('.thanks').css("display", "block");
	        },
	        error:  function(){
	        	alert('Что-то пошло не так, попробуйте еще раз!');
	        }
	    });
	});

	$('.back').on('click', function() {
		$('.thanks').fadeOut('slow');
		$('.overlay').fadeOut('slow');
	});
});