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

	//slider

	let slideIndex = 1,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.getElementsByClassName('dot'),
		slideItem = document.querySelectorAll('.slider-item img');

	showSlides(slideIndex);

	function showSlides(n) {
		if (n > slides.length) {
			slideIndex = 1;
		}

		if (n < 1) {
			slideIndex = slides.length;
		}

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}

		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove('dot-active');
		}

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
	};

	function plusSlides(n) {
		showSlides(slideIndex += n);
	};

	function currentSlide(n) {
		showSlides(slideIndex = n);
	};

	prev.addEventListener('click', function() {
		plusSlides(-1);
		for (let i = 0; i < slideItem.length; i++) {
			slideItem[i].style.animation = 'prev 1s ease';
		}
	});

	next.addEventListener('click', function() {
		plusSlides(1);
		for (let i = 0; i < slideItem.length; i++) {
			slideItem[i].style.animation = 'next 1s ease';
		}
	});

	dotsWrap.addEventListener('click', function(event) {
		for (let i = 0; i < dots.length + 1; i++) {
			if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
				currentSlide(i);
			}
		}
	});


	//calculation

	let persons = document.getElementsByClassName('counter-block-input')[0],
		restDays = document.getElementsByClassName('counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personSum = 0,
		daySum = 0,
		total = 0;

	totalValue.innerHTML = 0;

	function animateNumber(total) {
	   	let number = 0;

	    setInterval(function() {
	        number+=200;
	        
	       	if (number <= total) {
	        	totalValue.innerHTML = number;
	       	}
    	}, 1);
	};

	persons.addEventListener('change', function() {
		personSum = +this.value;
		total = (daySum + personSum)*4000;
		if (restDays.value == 0 || persons.value == 0) {
			totalValue.innerHTML = 0;
		} else {
			animateNumber(total);
		}
	});

	restDays.addEventListener('change', function() {
		daySum = +this.value;
		total = (daySum + personSum)*4000;
		if (persons.value == 0 || restDays.value == 0) {
			totalValue.innerHTML = 0;
		} else {
			animateNumber(total);
		}
	});

	persons.addEventListener('input', function () {
		this.value = +this.value.replace(/\D/g, '');
	});

	restDays.addEventListener('input', function () {
		this.value = +this.value.replace(/\D/g, '');
	});

	place.addEventListener('change', function() {
		if (restDays.value == 0 || persons.value == 0) {
			totalValue.innerHTML = 0;
		} else {
			let a = total;
			animateNumber(totalValue.innerHTML = a * this.options[this.selectedIndex].value);
		}
	});
});