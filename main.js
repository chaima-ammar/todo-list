const input = document.getElementById('input');
const button = document.getElementById('addButton');
const ul = document.getElementById('container');

let i =0;
button.addEventListener('click', function() {
	let li = document.createElement('li');

	
	li.innerText = input.value;
	ul.appendChild(li);
	li.style.color = 'white';
	li.style.listStyle = 'none';
	input.value = '';
	
	let button1 = document.createElement('button1');
	button1.innerText = 'REMOVE';
	ul.appendChild(button1);
	button1.style.color = 'red';
	button1.addEventListener('click', function() {
		li.remove();
		button1.remove();
	});
 })



	


function reloadPage() {
	window.location.reload();
}

