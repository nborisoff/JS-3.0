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

	sum,
	name;


openButton.setAttribute('disabled', 'disabled');
goodsButton.setAttribute('disabled', 'disabled');
budgetButton.setAttribute('disabled', 'disabled');
employerButton.setAttribute('disabled', 'disabled');

openButton.addEventListener('click', () => {
	sum = prompt("Ваш бюджет на месяц?", "");

	while (isNaN(sum) || sum == '' || sum == null || sum.replace(/\s/g,'') == '') {
		sum = prompt("Ваш бюджет на месяц?", "");
	}

	budgetValue.textContent = sum;

	name = prompt("Название вашего магазина?", "");

	while (name == '' || name == null || name.replace(/\s/g,'') == '') {
		name = prompt("Название вашего магазина?", "");
	}

	nameValue.textContent = name.toUpperCase();
});

function disBtnGoods() {
  goodsButton.disabled = this.value.trim().length === 0;
}

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

		discountValue.style.backgroundColor = '#e34754';
		openButton.style.background = '#e34754';
	} else if(time > 8 && time < 20) {
		console.log('Время работать!');
		mainList.open = true;

		openButton.style.background = '#91c31f';

		openButton.removeAttribute('disabled');
		goodsButton.removeAttribute('disabled');
		budgetButton.removeAttribute('disabled');
		employerButton.removeAttribute('disabled');

		goodsItem[0].addEventListener('input', disBtnGoods);
		goodsItem[1].addEventListener('input', disBtnGoods);
		goodsItem[2].addEventListener('input', disBtnGoods);
		goodsItem[3].addEventListener('input', disBtnGoods);

		disBtnGoods.call(goodsItem[0]);
		disBtnGoods.call(goodsItem[1]);
		disBtnGoods.call(goodsItem[2]);
		disBtnGoods.call(goodsItem[3]);

		hireEmployers[0].addEventListener('input', disBtnEmployer);
		hireEmployers[1].addEventListener('input', disBtnEmployer);
		hireEmployers[2].addEventListener('input', disBtnEmployer);

		disBtnEmployer.call(hireEmployers[0]);
		disBtnEmployer.call(hireEmployers[1]);
		disBtnEmployer.call(hireEmployers[2]);
		} else if(time < 24) {
			console.log('Уже слишком поздно!');
			mainList.open = false;
			openButton.setAttribute('disabled', 'disabled');
			goodsButton.setAttribute('disabled', 'disabled');
			budgetButton.setAttribute('disabled', 'disabled');
			employerButton.setAttribute('disabled', 'disabled');

			discountValue.style.backgroundColor = '#e34754';
			openButton.style.background = '#e34754';
			} else {
				console.log('В сутках только 24 часа!')
				mainList.open = false;
				openButton.setAttribute('disabled', 'disabled');
				goodsButton.setAttribute('disabled', 'disabled');
				budgetButton.setAttribute('disabled', 'disabled');
				employerButton.setAttribute('disabled', 'disabled');

				discountValue.style.backgroundColor = '#e34754';
				openButton.style.background = '#e34754';
			}

	if (mainList.open == true) {
		isOpenValue.style.backgroundColor = '#91c31f';
	} else {
		isOpenValue.style.backgroundColor = '#e34754';
	}
});	

countBudget.setAttribute('disabled', 'disabled');
budgetButton.addEventListener('click', () => {
	countBudget.value = sum / 30;
});

function disBtnEmployer() {
  employerButton.disabled = this.value.trim().length === 0;
}

employerButton.addEventListener('click', () => {
	employersValue.textContent = '';
	for (let i = 0; i < hireEmployers.length; i++) {
		let name = hireEmployers[i].value;	

		if ((typeof(name)) === 'string' && name != null && name.length < 50 ) {
			mainList.employers[i] = name;
			console.log(mainList.employers[i]);
			employersValue.textContent += mainList.employers[i] + ', ';
		} else {
			i--;
		}
	}
});

let value = hireEmployers[0].value,
	value1 = hireEmployers[1].value,
	value2 = hireEmployers[2].value;

function rusInput(event){
  let newValue = event.target.value;
  if(newValue.match(/[^а-яА-Я]/g)) {
     hireEmployers[0].value = value;
     return;
  }
  value = newValue;
}

function rusInput1(event){
  let newValue = event.target.value;
  if(newValue.match(/[^а-яА-Я]/g)) {
     hireEmployers[1].value = value1;
     return;
  }
  value = newValue;
}

function rusInput2(event){
  let newValue = event.target.value;
  if(newValue.match(/[^а-яА-Я]/g)) {
     hireEmployers[2].value = value2;
     return;
  }
  value = newValue;
}

hireEmployers[0].addEventListener('input', rusInput);
hireEmployers[1].addEventListener('input', rusInput1);
hireEmployers[2].addEventListener('input', rusInput2);

discountValue.addEventListener('click', () => {
	if (mainList.open == true) {
		mainList.discount = confirm('Сегодня день скидок?');
		if (mainList.discount == true) {
			discountValue.style.backgroundColor = '#91c31f';
		} else {
			discountValue.style.backgroundColor = '#e34754';
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
	shopItems: []
}

console.log(mainList);