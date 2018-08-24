//№1. Первый переводим в верхний регистр и конкатенируем с остальной строкой
let str = "урок-3-был слишком легким";

str = str[0].toUpperCase() + str.substring(1);


/*№2. replace заменяет только первое совпадение, 
поэтому ищем не по строке,а по регулярному выражению с флагом g*/
str = str.replace(/-/g,' ');
console.log(str);


/*№3. Ищем совпадение, преобразуем найденный объект в строку прибавлением [], 
и заменяем два последних символа с помощью регулярного выражения, где $ означает конец строки, 
а . соответствует любому символу кроме переноса строки*/

str = (str.match('легким')+[]).replace(/..$/,'о');

document.write(str + '<br>');


//№4.
let arr = [20, 33, 1, "Человек", 2, 3];
	sum = 0;

for(var i = 0; i < arr.length; i++){
    if (!isNaN(arr[i])) {	
		sum += Math.pow(arr[i],3);
	}
}
 
sqrt = Math.sqrt(sum);

console.log(sqrt);


//№5.
st = '          aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffff   ';

function testString(strn) {
	if ((typeof(strn)) === 'string') {
		strn = strn.trim();

		if (strn.length > 50) {
			strn = strn.slice(0, 50) + '...';
		}

		st = strn;
	} else {
		alert('Аргумент не является строкой');
	}
}

testString(st);

console.log(st);
