const assert = require('assert');
const passing = document.getElementById('result');
const text = document.getElementById('challenge-text');
const seed = document.getElementById('challenge-seed');
const solution = document.getElementById('challenge-solution');
const title = document.getElementById('challenge-title');

// Challenge 2:
title.innerHTML = 'Add items to an array with `push()` and `unshift()`';

text.innerHTML = `
<strong>Description:</strong> An array's length, like the data types it can contain, is not fixed. Arrays can be defined with a length of any number of 
elements, and elements can be added or removed over time. In this challenge, we will look at two methods with which we can programmatically 
modify an array: <code>Array.push()</code> and <code>Array.unshift()</code>. <br><br>

Both methods take one or more elements as <em>parameters</em> and add those elements to the array the method is being called on; the <code>push()</code> 
method adds elements to the end of an array, and <code>unshift()</code> adds elements to the beginning. Consider the following: <br><br>

<pre><code>
<<<<<<< ee6882e8728a4965e006261d71b0a2155bf29c6b
const twentyThree = 'XXIII';

let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX'); 
// now equals ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree); 
// now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']
=======
const green = 'Iguana Green';

let colorScheme = ['Island Indigo', 'Khaki'];

colorScheme.unshift('Yankees Blue', 'Sky Blue'); 
// now equals ['Yankees Blue', 'Sky Blue', 'Island Indigo', 'Khaki']

colorScheme.push(green); 
// now equals ['Yankees Blue', 'Sky Blue', 'Island Indigo', 'Khaki', 'Iguana Green']
>>>>>>> additional challenges
</code></pre>
<br>

Notice that we can also pass variables, which allows us even greater flexibility in dynamically modifying our array's data.
<br><br>

<strong>Instructions:</strong> We have defined a function, <code>mixedNumbers</code>, which we are passing an array as an argument. Modify the 
function by using <code>push()</code> and <code>shift()</code> to add <code>'I', 2, 'three'</code>, to the beginning of the array and 
<code>7, 'VIII', '9'</code> to the end so that the returned array contains representations of the numbers 1-9 in order.`;

seed.innerHTML = `
var mixedNumbers = (arr) => {
	// write code below this line

	// write code above this line
	return arr;
}

mixedNumbers(['IV', 5, 'six'])
`;

solution.innerHTML = `
var mixedNumbers = (arr) => {
	arr.push(7, 'VIII', '9');
	arr.unshift('I', 2, 'three');
	return arr;
}

mixedNumbers(['IV', 5, 'six']);
`;

var mixedNumbers = (arr) => {
	arr.push(7, 'VIII', '9');
	arr.unshift('I', 2, 'three');
	return arr;
}

mixedNumbers(['IV', 5, 'six']);

try {
	assert.deepEqual(mixedNumbers(['IV', 5, 'six']), ['I', 2, 'three', 'IV', 5, 'six', 7, 'VIII', '9'], "<code>mixedNumbers(['IV', 5, 'six'])</code> should now return <code>['I', 2, 'three', 'IV', 5, 'six', 7, 'VIII', '9']</code>");
	assert(mixedNumbers.toString().search(/\.push\(/) !== -1, "The <code>mixedNumbers</code> function should utilize the <code>push()</code> method."); 
	assert(mixedNumbers.toString().search(/\.unshift\(/) !== -1, "The <code>mixedNumbers</code> function should utilize the <code>unshift()</code> method."); 
	passing.innerHTML = `<div class="test pass">Tests Pass!</div>`;
} catch (err) {
	passing.innerHTML = `<div class="test fail"><code>${err}</code></div>`;
}