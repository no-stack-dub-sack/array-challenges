const assert = require('assert');
const passing = document.getElementById('result');
const text = document.getElementById('challenge-text');
const seed = document.getElementById('challenge-seed');
const solution = document.getElementById('challenge-solution');
const title = document.getElementById('challenge-title');

// Challenge 3:
title.innerHTML = 'Remove items from an array with  `pop` and `shift`';

text.innerHTML = `
<strong>Description:</strong>
Both <code>push()</code> and <code>unshift()</code> have corresponding methods that are nearly functional opposites: <code>pop()</code> and 
<code>shift()</code>. As you may have guessed by now, instead of adding, <code>pop()</code> <em>removes</em> an element from the end of an array, while <code>shift()</code> 
removes an element from the beginning. The key difference between <code>pop()</code> and <code>shift()</code> and their cousins <code>push()</code> and 
<code>unshift()</code>, is that neither method takes parameters, and each only allows an array to be modified by a single element at a time.<br><br>

Let's take a look: <br><br>

<code>
let greetings = ['whats up?', 'hello', 'see ya!'];<br>
greetings.pop() // now equals ['whats up?', 'hello']<br>
greetings.shift() // now equals ['hello']
</code><br><br>

We can also return the value of the removed element with either method like this:<br><br>

<code>const popped = greetings.pop(); // returns 'hello'<br>
// greetings now equals []</code>

<br><br>

<strong>Instructions:</strong> Use <code>pop()</code> and <code>shift()</code> to remove the first and last element of the <code>popShift</code> array, and assign the removed
elements to their corresponding variables, <code>popped</code> and <code>shifted</code>.`;

seed.innerHTML = `let popShift = ['this', 'sentence', 'is', 'finished'];<br>
const popped = // write code here <br>
const shifted = // write code here 
`;

solution.innerHTML = `const popShift = ['this', 'sentence', 'is', 'finished'];<br>
const popped = popShift.pop();<br>
const shifted = popShift.shift();`;



let popShift = ['this', 'sentence', 'is', 'finished'];
const popped = popShift.pop();
const shifted = popShift.shift();
console.log(popShift, popped, shifted)

try {
	assert.deepEqual(popShift, ['sentence', 'is'], "<code>popShift</code> should now equal <code>['sentence', 'is']</code>.");
	assert.strictEqual(popped, 'finished', "<code>popped</code> should equal <code>'finished'</code>.");
	assert.strictEqual(shifted, 'this', "<code>shifted</code> should equal <code>'this'</code>.");
	passing.innerHTML = `<div class="test pass">Tests Pass!</div>`;
} catch (err) {
	passing.innerHTML = `<div class="test fail"><code>${err}</code></div>`;
}