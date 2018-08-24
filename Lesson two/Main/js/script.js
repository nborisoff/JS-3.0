let sum = +prompt("Ваш бюджет на месяц?"),
	name = prompt("Название вашего магазина?"),
	time = 19;
	mainList = {
		budget: sum,
		shopName: name,
		shopGoods: [],
		employers: {},
		open: false
}



for (let i = 0; i < 5; i++){
	
	let a = prompt("Какой тип товаров будем продавать?");

	if ((typeof(a)) === 'string' && a != null && a != '' && a.length < 50 ) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else {
		console.log('Неверно!');
		i--;
	}
}

//Способ заменить for
/*let i = 0;

while (i < 5){

	let a = prompt("Какой тип товаров будем продавать?");

	if ((typeof(a)) === 'string' && a != null && a != '' && a.length < 50 ) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else {
		console.log('Неверно!');
		i--;
	}

	i++;
}*/

//Еще один способ заменить for
/*let i = 0;

do {
	let a = prompt("Какой тип товаров будем продавать?");

	if ((typeof(a)) === 'string' && a != null && a != '' && a.length < 50 ) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else {
		console.log('Неверно!');
		i--;
	}

	i++;
}
while (i < 5);*/


if (time < 0) {
	console.log('Такого просто не может быть');
} else if(time > 8 && time < 20) {
	console.log('Время работать!');
	} else if(time < 24) {
		console.log('Уже слишком поздно!');
		} else {
			console.log('В сутках только 24 часа!')
		};


alert("Ваш бюджет на один день: " + mainList.budget/30);
console.log(mainList);