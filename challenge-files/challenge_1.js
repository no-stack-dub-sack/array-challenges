const assert = require('assert');
const passing = document.getElementById('result');
const text = document.getElementById('challenge-text');
const seed = document.getElementById('challenge-seed');
const solution = document.getElementById('challenge-solution');
const title = document.getElementById('challenge-title');

// Challenge 1: Use an array to store a collection of data
title.innerHTML = 'Use an array to store a collection of data';
text.innerHTML = `
<strong>Description:</strong> Arrays are JavaScript's most fundamental, and perhaps most common, data structure. An <strong>array</strong> is simply a collection of data, of any 
length (zero-indexed), arranged in a comma separated list and enclosed in brackets <code>[ ]</code>. While we often make the distinction in JavaScript between 
Objects and Arrays, it is important to note that technically, an <strong>array</strong> <em>is</em> a type of <strong>object</strong>.<br><br>

Arrays can store any type of data supported by JavaScript, and while they are a simple and basic form of data structure, they can also be 
very complex and powerful - all of which depends on how the programmer utilizes them.

The below is an example of a valid array, notice it contains booleans, strings, numbers, arrays, and objects, among other valid data types: <br><br>

<code>const myArray = [undefined, null, true, false, 'one', 2, "III", {'four': 5}, [6, 'seven', 8]];</code><br><br>

JavaScript arrays have many built in <em>methods</em> which allow us to access, traverse, and mutate arrays as needed, depending on our purpose. Array 
methods are inherited through the <code>Array.prototype</code> property, which also allows us to create custom methods and properties for arrays. 
We will discuss several of JavaScripts built in array methods in the coming challenges, but for a comprehensive list, and to learn more about
<codw>Array.prototype</codw>, vist <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">this link</a>.<br><br>

<strong>Instructions:</strong> In the editor, we have defined a variable called <code>yourArray</code>; complete the declaration by defining an array of at least 5 elements in length.
Your array should contain at least one string, one number, and one boolean.`;

seed.innerHTML = 'const yourArray = // write code here;';

solution.innerHTML = `const yourArray = [true, false, 'one', 2, 'III'];`;

const yourArray = [true, false, 'one', 2, 'III'];

try {
	assert.strictEqual(Array.isArray(yourArray), true, 'yourArray is an array.');
	assert(yourArray.length >= 5, 'yourArray is at least 5 elements long.')
	assert(yourArray.filter( el => typeof el === 'boolean').length >= 1, '<code>yourArray</code> contains at least one boolean.');
	assert(yourArray.filter( el => typeof el === 'number').length >= 1, '<code>yourArray</code> contains at least one number.');
	assert(yourArray.filter( el => typeof el === 'string').length >= 1, '<code>yourArray</code> contains at least one string.');
	passing.innerHTML = `<div class="test pass">Tests Pass!</div>`;
} catch (err) {
	passing.innerHTML = `<div class="test fail"><code>${err}</code></div>`;
}