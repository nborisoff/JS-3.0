let openButton = document.getElementById('open-btn'),

	nameValue = document.getElementsByClassName('name-value')[0],
	budgetValue = document.getElementsByClassName('budget-value')[0],
	goodsValue = document.getElementsByClassName('goods-value')[0],
	itemsValue = document.getElementsByClassName('items-value')[0],
	employersValue = document.getElementsByClassName('employers-value')[0],
	discountValue = document.getElementsByClassName('discount-value')[0],
	isOpenValue = document.getElementsByClassName('isopen-value')[0],

	goodsItem = document.getElementsByClassName('goods-item'),

	goodsButton = document.getElementsByTagName('button')[1],
	budgetButton = document.getElementsByTagName('button')[2],
	employerButton = document.getElementsByTagName('button')[3],

	chooseItem = document.querySelector('.choose-item'),
	timeValue = document.querySelector('.time-value'),
	countBudget = document.querySelector('.count-budget-value'),

	hireEmployers = document.querySelectorAll('.hire-employers-item'),

	sum;

openButton.addEventListener('click', () => {
	sum = prompt("Ваш бюджет на месяц?", "");

	while (isNaN(sum) || sum == "" || sum == null) {
		sum = prompt("Ваш бюджет на месяц?", "");
	}

	budgetValue.textContent = sum;
	nameValue.textContent = prompt("Название вашего магазина?", "").toUpperCase();
});

goodsButton.addEventListener('click', () => {
	for (let i = 0; i < goodsItem.length; i++) {		
		let a = goodsItem[i].value;

		if ((typeof(a)) === 'string' && a != null && a.length < 50 ) {
			mainList.shopGoods[i] = a;
			goodsValue.textContent = mainList.shopGoods;
		} else {
			i--;
		}
	}
});

chooseItem.addEventListener('change', () => {
	let items = chooseItem.value;

	if (isNaN(items) && items != '') {
		mainList.shopItems = items.split(",");
		mainList.shopItems.sort();

		itemsValue.textContent = mainList.shopItems;
	}
});

timeValue.addEventListener('change', () => {
	let time = timeValue.value;

	if (time < 0) {
		console.log('Такого просто не может быть');
		mainList.open = false;
		openButton.setAttribute('disabled', 'disabled');
		goodsButton.setAttribute('disabled', 'disabled');
		budgetButton.setAttribute('disabled', 'disabled');
		employerButton.setAttribute('disabled', 'disabled');
		discountValue.style.backgroundColor = 'red';
	} else if(time > 8 && time < 20) {
		console.log('Время работать!');
		mainList.open = true;
		openButton.removeAttribute('disabled');
		goodsButton.removeAttribute('disabled');
		budgetButton.removeAttribute('disabled');
		employerButton.removeAttribute('disabled');
		} else if(time < 24) {
			console.log('Уже слишком поздно!');
			mainList.open = false;
			openButton.setAttribute('disabled', 'disabled');
			goodsButton.setAttribute('disabled', 'disabled');
			budgetButton.setAttribute('disabled', 'disabled');
			employerButton.setAttribute('disabled', 'disabled');
			discountValue.style.backgroundColor = 'red';
			} else {
				console.log('В сутках только 24 часа!')
				mainList.open = false;
				openButton.setAttribute('disabled', 'disabled');
				goodsButton.setAttribute('disabled', 'disabled');
				budgetButton.setAttribute('disabled', 'disabled');
				employerButton.setAttribute('disabled', 'disabled');
				discountValue.style.backgroundColor = 'red';
			}

	if (mainList.open == true) {
		isOpenValue.style.backgroundColor = 'green';
	} else {
		isOpenValue.style.backgroundColor = 'red';
	}
});	

countBudget.setAttribute('disabled', 'disabled');
budgetButton.addEventListener('click', () => {
	countBudget.value = sum / 30;
});

employerButton.addEventListener('click', () => {

	for (let i = 0; i < hireEmployers.length; i++) {
		let name = hireEmployers[i].value;

		mainList.employers[i] = name;
		employersValue.textContent += mainList.employers[i] + ', ';
	}
});

discountValue.addEventListener('click', () => {
	if (mainList.open == true) {
		mainList.discount = confirm('Сегодня день скидок?');
		if (mainList.discount == true) {
			discountValue.style.backgroundColor = 'green';
		} else {
			discountValue.style.backgroundColor = 'red';
		}
	}
});

let	mainList = {
	budget: sum,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true,
	shopItems: [],
	discountCalc: function discountCalc() {
		price = prompt("Введите цену", "");

		while (isNaN(price) || price == "" || price == null) {
			price = prompt("Введите цену", "");
		}

		if (mainList.discount == true) {
			price = price * 0.8;	
		}
	}
}

/*mainList.chooseGoods();

mainList.workTime(time);

mainList.budgetCalc();

mainList.discountCalc();

mainList.hire();

mainList.chooseShopItems();

for (let key in mainList) {
	console.log("Наш магазин включает в себя: " + key + " : " + mainList[key]);
}*/

console.log(mainList);
