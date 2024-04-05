const inputBox = document.querySelector('input');

const length = 12;

const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = upper.toLowerCase();
const symbol = '@><#%&';

const allCars = upper + lower + symbol;

function generatePassowrd() {
	let password = '';

	while (length > password.length) {
		password += allCars[Math.floor(Math.random() * allCars.length)];
	}

	inputBox.value = password;
}

document.querySelector('button').addEventListener('click', () => {
	generatePassowrd();
});

document.querySelector('.js-copy-image').addEventListener('click', () => {
	navigator.clipboard.writeText(inputBox.value);
});

console.log('low');
