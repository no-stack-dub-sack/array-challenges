const assert = require('assert');
const passing = document.getElementById('result');
const text = document.getElementById('challenge-text');
const seed = document.getElementById('challenge-seed');
const solution = document.getElementById('challenge-solution');
const title = document.getElementById('challenge-title');

title.innerHTML = 'Check for the presence of an element with `indexOf()`';
text.innerHTML = `
<strong>Description:</strong> Since arrays can be changed, or <em>mutated</em>, at any time, there's no guarantee about where a particular piece of
data will be on a given array, or if that element even still exists. Luckily, JavaScript provides us with another built-in method, <code>indexOf()</code>, that 
allows us to quickly and easily check for the presence of an element on an array. <code>indexOf()</code> takes an element as a parameter, and when called, 
it returns the position, or index, of that element, or <code>-1</code> if the element does not exist on the array. 

For example:

<pre><code>
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
fruits.indexOf('dates') // returns -1
fruits.indexOf('oranges') // returns 2
fruits.indexOf('pears') // returns 1, the first index at which the element exists
</code></pre>
<br><br>

<strong>Instructions:</strong> <code>indexOf()</code> can be incredibly useful for quickly checking for the presence of an element on an array. We have defined
a function, <code>quickCheck</code>, that takes an array and an element as arguments. Modify the function using <code>indexOf()</code> so that it returns true if the passed 
element exists on the array, and false if it does not.`;

seed.innerHTML = `
function quickCheck(arr, elem) {
	// change code below this line

	return elem;
}

quickCheck(['squash', 'onions', 'shallots'], 'mushrooms');
`;

solution.innerHTML = `
function quickCheck(arr, elem) {
	if (arr.indexOf(elem) !== -1) {
		return true
	} else {
		return false;
	}
}
`;

function quickCheck(arr, elem) {
	if (arr.indexOf(elem) !== -1) {
		return true
	} else {
		return false;
	}
}

quickCheck(['squash', 'onions', 'shallots'], 'mushrooms');

try {
	assert.strictEqual(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'), false, "<code>quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')</code> should return <code>false</code>.");
	assert.strictEqual(quickCheck(['squash', 'onions', 'shallots'], 'onions'), true, "<code>quickCheck(['squash', 'onions', 'shallots'], 'onions')</code> should return <code>true</code>.");
	assert.strictEqual(quickCheck([3, 5, 9, 125, 45, 2], 125), true, "<code>quickCheck([3, 5, 9, 125, 45, 2], 125)</code> should return <code>true</code>.");
	assert.strictEqual(quickCheck([true, false, false], undefined), false, "<code>quickCheck([true, false, false], undefined)</code> should return <code>false</code>.");
	assert.notStrictEqual(quickCheck.toString().search(/\.indexOf\(/), -1, "The <code>quickCheck</code> function should utilize the <code>indexOf() method.</code>");
	passing.innerHTML = `<div class="test pass">Tests Pass!</div>`;
} catch (err) {
	passing.innerHTML = `<div class="test fail"><code>${err}</code></div>`;
}

