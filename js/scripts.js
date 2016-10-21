var list = document.getElementById('Lista');
var addButtonElement = document.getElementById('addElem');
var liElements = document.getElementsByTagName('li');

addButtonElement.addEventListener('click', function() {
	list.innerHTML += '<li>dzień ' + liElements.length + '</li>'
});
