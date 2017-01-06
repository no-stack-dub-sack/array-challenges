const assert = require('assert');
const passing = document.getElementById('result');
const text = document.getElementById('challenge-text');
const seed = document.getElementById('challenge-seed');
const solution = document.getElementById('challenge-solution');
const title = document.getElementById('challenge-title');

// Challenge 3:
title.innerHTML = 'Remove items from an array with  `pop()` and `shift()`';

text.innerHTML = `
<strong>Description:</strong>
Both <code>push()</code> and <code>unshift()</code> have corresponding methods that are nearly functional opposites: <code>pop()</code> and 
<code>shift()</code>. As you may have guessed by now, instead of adding, <code>pop()</code> <em>removes</em> an element from the end of an array, while <code>shift()</code> 
removes an element from the beginning. The key difference between <code>pop()</code> and <code>shift()</code> and their cousins <code>push()</code> and 
<code>unshift()</code>, is that neither method takes parameters, and each only allows an array to be modified by a single element at a time.<br><br>

Let's take a look: <br><br>

<pre><code>
let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop() 
// now equals ['whats up?', 'hello']

greetings.shift() 
// now equals ['hello']
</code></pre><br>

We can also return the value of the removed element with either method like this:<br><br>

<pre><code>
const popped = greetings.pop(); 
// returns 'hello'
// greetings now equals []
</code></pre>

<br><br>

<strong>Instructions:</strong> We have defined a function, <code>popShift</code>, which takes an array as an argument and returns a new array. 
Modify the function, using <code>pop()</code> and <code>shift()</code>, to remove the first and last elements of the argument array, and assign
the removed elements to their corresponding variables, so that the returned array contains their values.`;

seed.innerHTML = `
var popShift = (arr) => {
	const popped = // write code here
	const shifted = // write code here
	return [shifted, popped];
}

popShift(['challenge', 'is', 'not', 'complete']);
`;

solution.innerHTML = `
var popShift = (arr) => {
	const popped = arr.pop();
	const shifted = arr.shift();
	return [shifted, popped];
}

popShift(['challenge', 'is', 'not', 'complete']);
`;


var popShift = (arr) => {
	const popped = arr.pop();
	const shifted = arr.shift();
	return [shifted, popped];
}

popShift(['challenge', 'is', 'not', 'complete']);


try {
	assert.deepEqual(popShift(['challenge', 'is', 'not', 'complete']), ['challenge', 'complete'], "<code>popShift(['challenge', 'is', 'not', 'complete'])</code> should return <code>['challenge', 'complete']</code>.");
	assert(popShift.toString().search(/\.pop\(/) !== -1, "The <code>popShift</code> function should utilize the <code>pop()</code> method."); 
	assert(popShift.toString().search(/\.shift\(/) !== -1, "The <code>popShift</code> function should utilize the <code>shift()</code> method."); 
	passing.innerHTML = `<div class="test pass">Tests Pass!</div>`;
} catch (err) {
	passing.innerHTML = `<div class="test fail"><code>${err}</code></div>`;
}