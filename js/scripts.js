var list = document.getElementById('Lista');
var add = document.getElementById('addElem');
var countOfLi = document.getElementsByTagName('li');

add.addEventListener('click', function() {
	list.innerHTML +='<li>dzień ' + countOfLi.length + '</li>'
	}
);