const assert = require('assert');
const passing = document.getElementById('result');
const text = document.getElementById('challenge-text');
const seed = document.getElementById('challenge-seed');
const solution = document.getElementById('challenge-solution');
const title = document.getElementById('challenge-title');

title.innerHTML = '';
text.innerHTML = `
<strong>Description:</strong> <br><br>

<strong>Instructions:</strong> `;

seed.innerHTML = `;`;

solution.innerHTML = `;`;


console.log()

try {
	
	passing.innerHTML = `<div class="test pass">Tests Pass!</div>`;
} catch (err) {
	passing.innerHTML = `<div class="test fail"><code>${err}</code></div>`;
}