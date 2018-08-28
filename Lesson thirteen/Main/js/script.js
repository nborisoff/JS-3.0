$(document).ready(function() {

	function showModal() {
		$('.overlay').animate({
			opacity: 'toggle'
		}, 1000);
		$('.modal').slideDown('slow');
	};

	$('.main_btna:first').on('click', showModal);
	$('.main_btn:first').on('click', showModal);
	$('a[href="#sheldure"]:eq(1)').on('click', showModal);
	
	$(('.close:first')).on('click', function() {
		$('.overlay').animate({
			opacity: 'toggle'
		}, 1000);
		$('.modal').slideUp('slow');
	})
});

