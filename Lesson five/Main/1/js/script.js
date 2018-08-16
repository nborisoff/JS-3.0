let menuItem = document.getElementsByClassName('menu-item'),
    ul = document.getElementsByTagName('ul')[0],
	body = document.querySelector('body'),
	title = document.getElementById('title'),
	adv = document.getElementsByClassName('adv'),
	question = document.getElementById('prompt');
	
ul.insertBefore(menuItem[2], menuItem[1]);

let li = document.createElement('li');
li.classList.add("menu-item");
li.textContent = 'Пятый пункт';
ul.appendChild(li);

body.style.background = 'url(img/apple_true.jpg) center no-repeat';

title.textContent = 'Мы продаем только подлинную технику Apple';

adv[0].remove();

question.textContent = prompt('Как вы относитесь к технике Apple?','');
