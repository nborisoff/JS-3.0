let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0; i < 7; i++) {
	if (i<3) {
		document.write( week[i] + '<br>');
	} else if(week[i] == 'Четверг') {
		document.write('<i>' + week[i] +' </i>' + '<br>');
		} else if (i>4) {
			document.write('<b>' + week[i] +'</b>' + '<br>');
			} else {
				document.write( week[i] + '<br>');
			}
}

let arr = [];

for (let i = 0; i < 7; i++) {
	
	let a = prompt("Введите многозначное число");

	if (a != null && a != '' && a.length > 3 ) {
		arr[i] = a;
	} else {
		alert('Многозначными считают числа больше тысячи. Попробуйте еще раз.');
		i--;
	}
}

console.log(arr);

for (let i = 0; i < arr.length; i++) {
	if (arr[i][0] === '3' || arr[i][0] === '7' ) {
		console.log(arr[i]);
	}
}

//Способ с динамической подсветкой курсивом текущего дня недели
/*let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
	date = new Date(),
	today = date.getDay();

for (let i = 1; i < 7; i++) {
	if (i == 6) {
		document.write('<b>' + week[i] +'</b>' + '<br>');
	} else if(i == today) {
		document.write('<i>' + week[today] +'</i>' + '<br>');
	} else {
		document.write(week[i] + '<br>');
	}
}

if (today == 6){
	document.write('<b>' + '<i>' + week[6] + '</i>' +'</b>' + '<br>');
} else {
	document.write('<b>' + week[6] +'</b>' + '<br>');
}

if (today == 0){
	document.write('<b>' + '<i>' + week[0] + '</i>' +'</b>');
} else {
	document.write('<b>' + week[0] +'</b>');
}
