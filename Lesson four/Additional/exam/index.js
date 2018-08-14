function getFriendlyNumbers(start, end) {
	let i,j,arr = [];

	if (!isNaN(start) && !isNaN(end) && start > 0 && start <= end && isInteger(start) && isInteger (end)) {

		for (i = start; i < end+1; i++) {
			let friendly = divSum(srchDiv(i));

			for (j = start; j < end+1; j++) {
				let friendly1 = divSum(srchDiv(j));
				
				if (friendly == j && friendly1 == i && friendly != friendly1) {
					arr.push([i,j]);
				}
			}
		}


		for (i = 0; i < arr.length; i++) {
			for (j = 1; j < arr.length; j++) {
				if (arr[i] == arr[j].sort()) {
					arr.splice(j,j);
				}
			}
		}
	} else {
		return false;
	}

	return arr;
}

//Поиск делителей
function srchDiv(number) {
	let arr = [];
	for (let i = 1; i < number; i++) {
		if (number % i == 0) {
			arr.push(i);
		}
	}

	return arr;
}

//Сумма делителей
function divSum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
}

//Проверка на целое число
function isInteger(number) {
  return (number ^ 0) === number;
}

console.log(getFriendlyNumbers(1, 300));

module.exports = {
    firstName: 'Nikita',
    secondName: 'Borisov',
    task: getFriendlyNumbers
}