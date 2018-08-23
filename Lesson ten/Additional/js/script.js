let input = document.querySelector('input');
	
input.addEventListener("input", function() {
    let mask = '+_ (___) ___ ____',
        str = this.value.replace(/\D/g, ''),
        i = 0;

    this.value = mask.replace(/./g, function(input) {
        if (/[_\d]/.test(input) && i < str.length) {
        	return str.charAt(i++);
        } else if (i >= str.length) {
        	return '';
        } else {
        	return input;
        }	
    });
});
