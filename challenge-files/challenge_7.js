const assert = require('assert');
const passing = document.getElementById('result');
const text = document.getElementById('challenge-text');
const seed = document.getElementById('challenge-seed');
const solution = document.getElementById('challenge-solution');
const title = document.getElementById('challenge-title');

title.innerHTML = 'Copy an array with spread syntax';
text.innerHTML = `
<strong>Description:</strong> While <code>slice()</code> allows us to be selective about what elements of an array to copy, ammong several other 
useful tasks, ES6's new spread syntax allows us to easily copy <em>all</em> of an array's elements, in order, with a simple and highly readable syntax. The
spread syntax simply looks like this: <code>...</code><br><br>

In practice, we can use the spread syntax to copy an array like so:<br>

<pre><code>
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged, and is identical to thatArray
</code></pre>
<br><br>

<strong>Instructions:</strong> We have defined a function, <code>copyMachine</code> which takes <code>arr</code> (an array) and <code>num</code> (a number) as arguments. 
The function is supposed to return a new array made up of <code>num</code> copies of <code>arr</code>. We have done most of the work for you, but it doesn't work 
quite right yet. Modidy the function using the spead syntax so that it works correctly (hint: another method we have already covered might come in handy here!).`;

seed.innerHTML = `
function copyMachine(arr, num) {
	let newArr = [];
	while (num >= 1) {
		// change code below this line

		// change code above this line
		num--;
	}
	return newArr;
}

copyMachine([true, false, true], 2);
`;

solution.innerHTML = `
function copyMachine(arr, num) {
	let newArr = [];
	while (num >= 1) {
		newArr.push([...arr]);
		num--;
	}
	return newArr;
}
`;

function copyMachine(arr, num) {
	let newArr = [];
	while (num >= 1) {
		newArr.push([...arr]);
		num--;
	}
	return newArr;
}

copyMachine([true, false, true], 5.5);

try {
	assert.deepEqual(copyMachine([true, false, true], 2), [[true, false, true], [true, false, true]], "<code>copyMachine([true, false, true], 2)</code> should return <code>[[true, false, true], [true, false, true]]</code>.")
	assert.deepEqual(copyMachine([1, 2, 3], 5), [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]], "<code>copyMachine([1, 2, 3], 5)</code> should return <code>[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]</code>.");
	assert.deepEqual(copyMachine([true, true, null], 1), [[true, true, null]], "<code>copyMachine([true, true, null], 1)</code> should return <code>[[true, true, null]]</code>.");
	assert.deepEqual(copyMachine(['it works'], 3), [['it works'], ['it works'], ['it works']], "<code>copyMachine(['it works'], 3)</code> should return <code>[['it works'], ['it works'], ['it works']]</code>.");
	assert.notStrictEqual(copyMachine.toString().search(/\.\.\./), -1, "The <code>copyMachine</code> function should utilize the <code>...</code> syntax.");
	passing.innerHTML = `<div class="test pass">Tests Pass!</div>`;
} catch (err) {
	passing.innerHTML = `<div class="test fail"><code>${err}</code></div>`;
}