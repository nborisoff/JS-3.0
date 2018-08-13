let sum,
	name,
	time,
	price;


function start() {
	sum = prompt("Ваш бюджет на месяц?", "");

	while (isNaN(sum) || sum == "" || sum == null) {
		sum = prompt("Ваш бюджет на месяц?", "");
	}

	name = prompt("Название вашего магазина?", "").toUpperCase();
	time = 21;
}

start();

let	mainList = {
	budget: sum,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true,
	shopItems: [],
	chooseGoods: function chooseGoods() {
		for (let i = 0; i < 5; i++) {
			
			let a = prompt("Какой тип товаров будем продавать?", "");

			if ((typeof(a)) === 'string' && a != null && a != '' && a.length < 50 ) {
				mainList.shopGoods[i] = a;
			} else {
				i--;
			}
		}
	},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log('Такого просто не может быть');
		} else if(time > 8 && time < 20) {
			console.log('Время работать!');
			mainList.open = true;
			} else if(time < 24) {
				console.log('Уже слишком поздно!');
				} else {
					console.log('В сутках только 24 часа!')
				}
	},
	budgetCalc: function budgetCalc() {
		alert("Ваш бюджет на один день: " + mainList.budget/30);
	},
	discountCalc: function discountCalc() {
		price = prompt("Введите цену", "");

		while (isNaN(price) || price == "" || price == null) {
			price = prompt("Введите цену", "");
		}

		if (mainList.discount == true) {
			price = price * 0.8;	
		}
	},
	hire: function hire() {
		let temp = [];

		for (let i = 1; i < 5; i++) {

			let a = prompt("Введите имя сотрудника", "");	

			if ((typeof(a)) === 'string' && a != null && a != '' && a.length < 50 ) {
				mainList.employers[i] = a;
			} else {
				i--;
			}
		}
	},
	chooseShopItems: function chooseShopItems() {
		for (let i = 0; i < 1; i++) {
			let items = prompt("Перечислите через запятую ваши товары", "");

			if ((typeof(items)) === 'string' && items != null && items != '') {
				mainList.shopItems = items.split(",");
				let plusItem = prompt("Подождите, еще ", "");

				if ((typeof(plusItem)) === 'string' && plusItem != null && plusItem != '') {
					mainList.shopItems.push(plusItem);
					mainList.shopItems.sort();
					} else {
						mainList.shopItems.sort();
					}
			} else {
				i--;
			}
		}
		mainList.shopItems.forEach(function(item, i) {
			document.write("У нас вы можете купить: " + ++i + ". " + item + "<br>");
		})
	}
}

mainList.chooseGoods();

mainList.workTime(time);

mainList.budgetCalc();

mainList.discountCalc();

mainList.hire();

mainList.chooseShopItems();

for (let key in mainList) {
	console.log("Наш магазин включает в себя: " + key + " : " + mainList[key]);
}

console.log(mainList);