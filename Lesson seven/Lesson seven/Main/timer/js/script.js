let timerId = setTimeout(timer, 1000);

function timer() {
	let d = new Date();
	document.body.innerHTML = now(d);	
	timerId = setTimeout(timer, 1000);
}

function now(date) {

	let s = date.getSeconds(),
		m = date.getMinutes(),
		h = date.getHours();

 	if (s < 10) {
 	 	s = '0' + s;
 	}

 	if (m < 10) {
 	 	m = '0' + m;
 	}

 	if (h < 10) {
 	 	h = '0' + h;
 	}

  	return h + ':' + m + ':' + s;
}