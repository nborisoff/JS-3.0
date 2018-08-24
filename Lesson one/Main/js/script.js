let budget = +prompt("Ваш бюджет на месяц?"),
	shopName = prompt("Название вашего магазина?"),
	mainList = {
		budget,
		shopName,
		shopGoods: [],
		employers: {},
		open: true
}

mainList.shopGoods = [prompt("Какой тип товаров будем продавать?"),
				 prompt("Какой тип товаров будем продавать?"), 
				 prompt("Какой тип товаров будем продавать?")];

alert("Ваш бюджет на один день: " + budget/30);
console.log(obj);