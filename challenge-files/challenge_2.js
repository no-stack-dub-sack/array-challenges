const assert = require('assert');
const passing = document.getElementById('result');
const text = document.getElementById('challenge-text');
const seed = document.getElementById('challenge-seed');
const solution = document.getElementById('challenge-solution');
const title = document.getElementById('challenge-title');


// Challenge 2:
title.innerHTML = 'Add items to an array with `push` and `unshift`';

text.innerHTML = `
<strong>Description:</strong> An array's length, like the data types it can contain, is not fixed. Arrays can be defined with a length of any number of 
elements, and elements can be added or removed over time. In this challenge, we will look at two methods with which we can programmatically 
modify an array: <code>Array.push()</code> and <code>Array.unshift()</code>. <br><br>

Both methods take one or more elements as <em>parameters</em> and add those elements to the array the method is being called on; the <code>push()</code> 
method adds elements to the end of an array, and <code>unshift()</code> adds elements to the beginning. Consider the following: <br><br>

<code>
const green = 'Iguana Green';<br>
let colorScheme = ['Island Indigo', 'Khaki'];<br>
colorScheme.unshift('Yankees Blue', 'Sky Blue'); // now equals ['Yankees Blue', 'Sky Blue', 'Island Indigo', 'Khaki']<br>
colorScheme.push(green); // now equals ['Yankees Blue', 'Sky Blue', 'Island Indigo', 'Khaki', 'Iguana Green']
</code>
<br><br>

Notice that we can also pass variables, which allows us even greater flexibility in dynamically modifying our array's data.
<br><br>

<strong>Instructions:</strong> Use <code>push()</code> and <code>shift()</code> to add <code>'I', 2, 'three'</code>, to the beginning of the array and 
<code>7, 'VIII', '9'</code> to the end so that the numbers 1-9 are represented in order.`;

seed.innerHTML = `let mixedNumbers = ['IV', 5, 'six'];`;

solution.innerHTML = `let mixedNumbers = ['IV', 5, 'six'];<br>
mixedNumbers.push(7, 'VIII', '9');<br>
mixedNumbers.unshift('I', 2, 'three');<br> `;

let mixedNumbers = ['IV', 5, 'six'];
mixedNumbers.push(7, 'VIII', '9');
mixedNumbers.unshift('I', 2, 'three');

console.log(mixedNumbers)

try {
	assert.deepEqual(mixedNumbers, ['I', 2, 'three', 'IV', 5, 'six', 7, 'VIII', '9'], "<code>mixedNumbers</code> should now equal <code>['I', 2, 'three', 'IV', 5, 'six', 7, 'VIII', '9']</code>")
	passing.innerHTML = `<div class="test pass">Tests Pass!</div>`;
} catch (err) {
	passing.innerHTML = `<div class="test fail"><code>${err}</code></div>`;
}