function calculator() {
	let persons = document.getElementsByClassName('counter-block-input')[0],
		restDays = document.getElementsByClassName('counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personSum = 0,
		daySum = 0,
		total = 0;

	totalValue.innerHTML = 0;

	persons.addEventListener('change', function() {
		personSum = +this.value;
		total = (daySum + personSum)*4000;
		if (restDays.value == 0 || persons.value == 0) {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
		}
	});

	restDays.addEventListener('change', function() {
		daySum = +this.value;
		total = (daySum + personSum)*4000;
		if (persons.value == 0 || restDays.value == 0) {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
		}
	});

	persons.addEventListener('input', function () {
		this.value = +this.value.replace(/\D/g, '');
	});

	restDays.addEventListener('input', function () {
		this.value = +this.value.replace(/\D/g, '');
	});

	place.addEventListener('change', function() {
		if (restDays.value == '' || persons.value == '') {
			totalValue.innerHTML = 0;
		} else {
			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;;
		}
	});
}

module.exports = calculator;