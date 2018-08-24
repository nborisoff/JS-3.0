window.addEventListener('DOMContentLoaded', function() {

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (let i = 0; 1 < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});

	let deadline = 'August 30 2018 11:36:50 GMT+03:00';
	if ((Date.parse(deadline) - Date.parse(new Date())) >= 0) {
	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t/1000) % 60),
			minutes = Math.floor((t/1000/60) % 60),
			hours = Math.floor((t/(1000*60*60)));

			if (seconds < 10) {
 	 		seconds = '0' + seconds;
 			}

 			if (minutes < 10) {
 	 		minutes = '0' + minutes;
 			}

 			if (hours < 10) {
 	 			hours = '0' + hours;
 			}

		return {
			'total' : t,
			'hours' : hours,
			'minutes' : minutes,
			'seconds' : seconds
		};
	};

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');
			
		function updateClock() {
			let t = getTimeRemaining(endtime);
			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;

			if (t.total <= 0) {
				clearInterval(timeInterval);

			}

		};

		updateClock();
		let timeInterval = setInterval(updateClock, 1000);
	};

	setClock('timer', deadline);
	} else {
		document.getElementsByClassName('hours')[0].innerHTML = '00';
		document.getElementsByClassName('minutes')[0].innerHTML = '00';
		document.getElementsByClassName('seconds')[0].innerHTML = '00';
	}


	let menu = document.querySelectorAll('[href^="#"]'),
    	speed = 0.3;  

	for (let i = 0; i < menu.length; i++) {
	    menu[i].addEventListener('click', function(event) {
	        event.preventDefault();
	        let currentScroll = window.pageYOffset, //текущая прокрутка
	            elem = this.href.replace(/[^#]*(.*)/, '$1'), //элемент, к которому переходим
	            windowCoordinates = document.querySelector(elem).getBoundingClientRect().top, //координаты элемента относительно окна
	        	start = null;
	        
	        function scroll(time) {
	            if (start == null) {
	            	start = time;
	            }

	            let progress = time - start,
	            	y;

	            if (windowCoordinates < 0) {
	            	y = Math.max(currentScroll - progress/speed, currentScroll + windowCoordinates);
	            }else {
	               	y = Math.min(currentScroll + progress/speed, currentScroll + windowCoordinates);
	            }

	            window.scrollTo(0,y);

	            if (y != currentScroll + windowCoordinates) {
	                requestAnimationFrame(scroll);
	            } else {
	                location.elem = elem;
	            }
	        }

	        requestAnimationFrame(scroll);
	    });
	}

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', () => {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	let description = document.querySelectorAll('.description-btn');

	for (let i = 0; i < description.length; i++) {
		description[i].addEventListener('click', () => {
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});
	}

	//Form
	let message = new Object();
	message.loading = 'Загрузка...';
	message.success = 'Спасибо! Скоро мы с вами свяжемся';
	message.failure = 'Что-то пошло не так...';

	let mainForm = document.getElementsByClassName('main-form')[0],
		form = document.getElementById('form'),
		input = document.getElementsByTagName('input'),
		statusMessage = document.createElement('div');
	statusMessage.classList.add('status');

	function sendForm(elem) {
		elem.addEventListener('submit', function(event) {
			event.preventDefault();
			elem.appendChild(statusMessage);

			let formData = new FormData(elem);

			function postData(data) {

				return new Promise(function(resolve, reject) {
				let request = new XMLHttpRequest();
				request.open('POST', 'server.php');
				request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

				request.onreadystatechange = function() {
					if (request.readyState < 4) {
						resolve();
					} else if (request.readyState === 4) {
						if (request.status == 200 && request.status < 300) {
							resolve();
						} else {
							reject();
						}
					}
				}

				request.send(data);
				})
			}

			function clearInput() {
				for (let i = 0; i < input.length; i++) {
					input[i].value = ''; 
				}
			}

			postData(formData)
				.then(() => statusMessage.innerHTML = message.loading)
				.then(() => statusMessage.innerHTML = message.success)
				.catch(() => statusMessage.innerHTML = message.failure)
				.then(clearInput)
		});
	}

	sendForm(mainForm);
	sendForm(form);
});