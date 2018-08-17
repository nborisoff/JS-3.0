let button = document.getElementsByTagName('button')[0],
	date1 = document.getElementById('date1'),
	date2 = document.getElementById('date2'),
	diffValue = document.getElementsByClassName('diff-value')[0];

button.addEventListener('click', () => {

	let days,
		time,
		input1,
		input2,
		a,
		b;

	input1 = date1.value;
	input2 = date2.value;
	a = new Date(input1);
	b = new Date(input2);

	if (!isNaN(a) && !isNaN(b)){
		time = Math.abs(b.getTime() - a.getTime());
		days = Math.ceil(time) / (1000 * 3600 * 24);	
		diffValue.value = days;
	} else {
		diffValue.value = 'Выберите даты';
	}
});


function now(date) {

	let dd = date.getDate(),
		mm = date.getMonth() + 1,
		yy = date.getFullYear(),
		s = date.getSeconds(),
		m = date.getMinutes(),
		h = date.getHours();

 	if (dd < 10) {
 	 	dd = '0' + dd;
 	}

 	if (mm < 10) {
 	 	mm = '0' + mm;
 	}

 	if (s < 10) {
 	 	s = '0' + s;
 	}

 	if (m < 10) {
 	 	m = '0' + m;
 	}

 	if (h < 10) {
 	 	h = '0' + h;
 	}

  	return h + ':' + m + ':' + s + ' ' + dd + '.' + mm + '.' + yy;
}

let d = new Date();
document.write('<br>' + now(d) + '<br>');


function edit(date) {

	let dd = date.getDate(),
		mm = date.getMonth() + 1,
		yy = date.getFullYear();


 	if (dd < 10) {
 	 	dd = '0' + dd;
 	}

 	if (mm < 10) {
 	 	mm = '0' + mm;
 	}

  	return dd + '.' + mm + '.' + yy;
}

let d1 = new Date(2018, 5, 1);
document.write(edit(d1) + '<br>');

function today(date) {
	let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
		d2 = new Date(),
		today = d2.getDay();
		document.write(week[today] + '<br>');
}

today();