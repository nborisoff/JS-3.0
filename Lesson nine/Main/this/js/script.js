let age = document.getElementById('age');
 
let user = {
	value: age.value
}

function showUser(surname, name) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
	}


showUser.call(user, 'Borisov', 'Nikita');