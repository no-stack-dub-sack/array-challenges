const assert = require('assert');
const passing = document.getElementById('result');
const text = document.getElementById('challenge-text');
const seed = document.getElementById('challenge-seed');
const solution = document.getElementById('challenge-solution');
const title = document.getElementById('challenge-title');

// Challenge 4: 
title.innerHTML = 'Remove items using `splice()`';
text.innerHTML = `
<strong>Description:</strong> Ok, so we've learned how to remove elements from the beginning and end of arrays using <code>pop()</code> and 
<code>shift()</code>, but what if we want to remove an element from somewhere in the middle? Or remove more than one element at once? Well, 
that's where <code>splice()</code> comes in. <code>splice()</code> allows us to do just that: <strong>remove any numnber of consecutive 
elements</strong> from anywhere on an array.<br><br>

<code>splice()</code> can take up to 3 parameters, but for now, we'll focus on just the first 2. The first two parameters of <code>splice()</code> are integers which represent 
indexes, or postions, of the array that <code>splice()</code> is being called upon. And remember, arrays are <em>zero-indexed</em>, so to indicate
the first element of an array, we would use <code>0</code>. <code>splice()</code>'s first parameter represents the index on the array from which to begin removing 
elements, while the second parameter indicates the number of elements to delete. For example: <br>

<pre><code>
const array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 2); 
// indicates that splice() should remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']
</code></pre>

<code>splice()</code> not only modifies the array it is being called on, but it also returns a new array containing the value of the removed elements. For 
example: 

<pre><code>
const array = ['today', 'was', 'not', 'so', 'great'];
const newArray = array.splice(3, 2); 
// newArray equals ['so', 'great']
</code></pre>

<br><br>

<strong>Instructions:</strong> We've defined a function, <code>sumOfTen</code>, which takes an array as an argument and returns the sum of that array's 
elements. Modify the function, using <code>splice()</code>, so that it returns a value of <code>10</code>.`;

seed.innerHTML = `
var sumOfTen = (arr) => {
	// change code below this line

	// change code above this line
	return arr.reduce((a, b) => a + b);
}

sumOfTen([2, 5, 1, 5, 2, 1]);
`;

solution.innerHTML = `
var sumOfTen = (arr) => {
	arr.splice(1, 2);
	return arr.reduce((a, b) => a + b);
}

sumOfTen([2, 5, 1, 5, 2, 1]);
`;

var sumOfTen = (arr) => {
	arr.splice(1, 2);
	return arr.reduce((a, b) => a + b);
}

sumOfTen([2, 5, 1, 5, 2, 1]);

try {
	assert.strictEqual(sumOfTen([2, 5, 1, 5, 2, 1]), 10, "<code>sumOfTen</code> should return 10.");
	assert(sumOfTen.toString().search(/\.splice\(/) !== -1, "The <code>sumOfTen</code> function should utilize the <code>splice()</code> method.")
	passing.innerHTML = `<div class="test pass">Tests Pass!</div>`;
} catch (err) {
	passing.innerHTML = `<div class="test fail"><code>${err}</code></div>`;
}