let sum,
	name,
	time,
	price;


function start() {
	sum = prompt("Ваш бюджет на месяц?");

	while (isNaN(sum) || sum == "" || sum == null) {
		sum = prompt("Ваш бюджет на месяц?");
	}

	name = prompt("Название вашего магазина?").toUpperCase();
	time = 21;
}

start();

let	mainList = {
		budget: sum,
		shopName: name,
		shopGoods: [],
		employers: {},
		open: false,
		discount: true
}

function chooseGoods() {
	for (let i = 0; i < 5; i++) {
		
		let a = prompt("Какой тип товаров будем продавать?");

		if ((typeof(a)) === 'string' && a != null && a != '' && a.length < 50 ) {
			mainList.shopGoods[i] = a;
		} else {
			i--;
		}
	}
}

chooseGoods();

function workTime(time) {
	if (time < 0) {
		console.log('Такого просто не может быть');
	} else if(time > 8 && time < 20) {
		console.log('Время работать!');
		} else if(time < 24) {
			console.log('Уже слишком поздно!');
			} else {
				console.log('В сутках только 24 часа!')
			};
}

workTime(time);

function budgetCalc() {
alert("Ваш бюджет на один день: " + mainList.budget/30);
}

budgetCalc();

function discountCalc() {
	price = prompt("Введите цену");

	while (isNaN(price) || price == "" || price == null) {
		price = prompt("Введите цену");
	}

	if (mainList.discount == true) {
		price = price * 0.8;	
	}
}

discountCalc();

console.log(price);

function hire() {
	let temp = [];

	for (let i = 0; i < 4; i++) {

		let a = prompt("Введите имя сотрудника");	

		if ((typeof(a)) === 'string' && a != null && a != '' && a.length < 50 ) {
			mainList.employers[i] = a;
		} else {
			i--;
		}
	}
}

hire();

console.log(mainList);
