const assert = require('assert');
const passing = document.getElementById('result');
const text = document.getElementById('challenge-text');
const seed = document.getElementById('challenge-seed');
const solution = document.getElementById('challenge-solution');
const title = document.getElementById('challenge-title');

title.innerHTML = 'Create nested arrays';
text.innerHTML = `
<strong>Description:</strong> One of the most powerful features when thinking of arrays as data structures, is that arrays can contain, 
or even be completely made up of other arrays. We have seen arrays that contain arrays in previous challenges, but fairly simple ones. 
However, arrays can contain an infinite depth of arrays that can contain other arrays, each with their own arbitrary levels of depth, and so on. 
In this way, an array can very quickly become very complex data structure,  Consider this, for example:

<pre><code>
let nestedArray = [ // top, or first level - the outer most array
	['deep'], // an array within an array, 2 levels of depth
	[ 
		['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
	], 
	[ 
		[ 
			['deepest'], ['deepest'] // 2 arrays nested 4 levels deep 
		], 
		[ 
			[
				['deepest-est?'] // an array nested 5 levels deep
			] 
		]
	], 
];
</code></pre>

While this example may seem convoluted, this level of complexity is not unheard of, or even unusual, when dealing with large amounts of data. 
However, we can still very easily access the deepest levels of an array this complex with bracket notation:

<pre><code>
console.log(nestedArray[2][1][0][0][0]);
logs 'deepest-est?'
</code></pre>

And now that we know where that piece of data is, we can reset it if we need too:

<pre><code>
nestedArray[2][1][0][0][0] = 'deeper still';
console.log(nestedArray[2][1][0][0][0]);
now logs 'deeper still'
</code></pre>

<br><br>

<strong>Instructions:</strong> We have defined a variable, <code>myNestedArray</code>, set equal to an array. Modify <code>myNestedArray</code>, 
using any combination of strings, numbers, and booleans for data elements, so that it has exactly three levels of depth (remember, the outer-most array is level 1).`;

seed.innerHTML = `
let myNestedArray = [
	
	// change code here
	
];
`;

solution.innerHTML = `
let myNestedArray = [
	[
		1, 2, 3, 3, 5, 6, [true, false, false, 12]
	]
];
`;

let myNestedArray = [
	[
		1, 2, 3, 3, 5, 6, [true, false, false, 12]
	]
];

function setNestedElement(arr) {
	arr[0][0][2][3] = ['anything', 'anything'];
	return arr;
}


try {
	assert.strictEqual((function(arr) { let flattened = (function flatten(arr) { const flat = [].concat(...arr); return flat.some (Array.isArray) ? flatten(flat) : flat; })(arr); for (let i = 0; i < flattened.length; i++) { if ( typeof flattened[i] !== 'number' && typeof flattened[i] !== 'string' && typeof flattened[i] !== 'boolean') { return false } } return true })(myNestedArray), true, "<code>myNestedArray</code> should contain only numbers, booleans, and strings as data elements.");
	assert((function(arr) { for (let i = 0; i < arr.length; i++) { if (Array.isArray(arr[i])) {for (let j = 0; j < arr[i].length; j++) { if (Array.isArray(arr[i][j])) { return true } } } } })(myNestedArray) === true && (function(arr) { for (let i = 0; i < arr.length; i++) { for (let j = 0; j < arr[i].length; j++) { for (let k = 0; k < arr[i][j].length; k++) { if ( Array.isArray(arr[i][j][k]) ) { return false } } } } })(myNestedArray) === undefined, "<code>myNestedArray</code> should have exactly 3 levels of depth.");
	passing.innerHTML = `<div class="test pass">Tests Pass!</div>`;
} catch (err) {
	passing.innerHTML = `<div class="test fail"><code>${err}</code></div>`;
}













