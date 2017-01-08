const assert = require('assert');
const passing = document.getElementById('result');
const text = document.getElementById('challenge-text');
const seed = document.getElementById('challenge-seed');
const solution = document.getElementById('challenge-solution');
const title = document.getElementById('challenge-title');

title.innerHTML = 'Combining arrays with spread syntax';
text.innerHTML = `
Another huge advantage of the spread syntax, is the ability to combine arrays, or to insert all the elements of one array into another, at any index. With more traditional syntaxes, we can concatenate arrays, but this only allows us to combine arrays at the end of one, and at the start of another. Spread syntax makes the following operation extremely simple:

let thisArray = ['sage', 'rosemary', 'parsely', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'corriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsely', 'thyme', 'corriander']

Using spread syntax, we have just achieved an operation that would have been more more complex and more verbose had we used traditional methods.

<strong>Instructions:</strong> We have defined a function <code>spreadOut</code> that returns the variable <code>sentence</code>, modify the function using the spread syntax so that it returns the array <code>['learning', 'to', 'code', 'is', 'fun']</code>.`;

function spreadOut() {
	let fragment = ['to', 'code'];
	let sentence = 'change code here'
	return sentence;
}

solution.innerHTML = `;`;

function spreadOut() {
	let fragment = ['to', 'code'];
	let sentence = ['learning', ...fragment, 'is', 'fun'];
	return sentence;
}

console.log(spreadOut())

try {
assert.deepEqual(spreadOut(), ['learning', 'to', 'code', 'is', 'fun'], "<code>spreadOut</code> should return <code>['learning', 'to', 'code', 'is', 'fun']</code>.");
assert.notStrictEqual(spreadOut.toString().search(/\.\.\./), -1, "The <code>spreadOut</code> function should utilize the spread syntax.")
	passing.innerHTML = `<div class="test pass">Tests Pass!</div>`;
} catch (err) {
	passing.innerHTML = `<div class="test fail"><code>${err}</code></div>`;
}