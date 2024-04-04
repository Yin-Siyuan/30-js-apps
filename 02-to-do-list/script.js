const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');

function addTask() {
	if (inputBox.value === '') {
		alert('You must write something!');
	} else {
		let li = document.createElement('li');
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		let span = document.createElement('span');
		span.innerHTML = '\u00d7';
		li.appendChild(span);
	}

	inputBox.value = '';
	saveData();
}

function saveData() {
	localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
	listContainer.innerHTML = localStorage.getItem('data');
}

listContainer.addEventListener(
	'click',
	(e) => {
		if (e.target.tagName === 'LI') {
			e.target.classList.toggle('checked');
			saveData();
		} else if (e.target.tagName === 'SPAN') {
			e.target.parentElement.remove();
			saveData();
		}
	},
	false
);

document.querySelector('button').addEventListener('click', () => {
	addTask();
});

showTask();
