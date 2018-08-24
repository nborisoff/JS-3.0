function primeNumbers(){
	let arr = [];

	prime:
		for (let i = 1; i <= 100; i++) {
	    	for (let j = 2; j < i; j++) {
	      		if (i % j == 0) continue prime;
	    		}
	    	arr.push(i);
	  	}

	document.write("Делители числа " + arr[0] + ": " + arr[0] + "<br>" );
	arr.shift();

	arr.forEach(function(item, i, arr) {
		document.write("Делители числа " + item + ": 1 и " + arr[i] + "<br>" );
	})
}

primeNumbers();