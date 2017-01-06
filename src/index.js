const assert = require('assert');
const passing = document.getElementById('result');
const text = document.getElementById('challenge-text');
const seed = document.getElementById('challenge-seed');
const solution = document.getElementById('challenge-solution');
const title = document.getElementById('challenge-title');

<<<<<<< ee6882e8728a4965e006261d71b0a2155bf29c6b
title.innerHTML = '';
text.innerHTML = `
<strong>Description:</strong> <br><br>

<strong>Instructions:</strong> `;

seed.innerHTML = `;`;

solution.innerHTML = `;`;


console.log()

try {
	
=======
title.innerHTML = 'Copy an array with <code>slice()</code>';
text.innerHTML = `
<strong>Description:</strong> The next method we will cover is <code>slice()</code>. <code>slice()</code>, rather than modifying an array, copies, or <em>extracts</em>, 
a given mumber of elements to a new array object, leaving the array it is called upon untouched. <code>slice()</code> takes only 2 parameters &mdash; the first 
is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including
the element at this index). Consider this:

<pre><code>
const weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
const todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']
</code></pre> <br>

In effect, we have created a new array by extracting elements from an existing array.<br><br>

<strong>Instructions:</strong> `;

seed.innerHTML = `
var forecast = (arr) => {
	// write code below this line

	return arr;
}`;

solution.innerHTML = `
var forecast = (arr) => {
	return arr.slice(2, 4);
}
`;

var forecast = (arr) => {
	return arr.slice(2, 4);
}

forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']);
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']))

try {
	assert.deepEqual(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']), ['warm', 'sunny'], "<code>forecast</code> should return <code>['warm', 'sunny'].");
	assert(forecast.toString().search(/\.slice\(/) !== -1, "The <code>forecast</code> function should utilize the <code>slice()</code> method.");
>>>>>>> additional challenges
	passing.innerHTML = `<div class="test pass">Tests Pass!</div>`;
} catch (err) {
	passing.innerHTML = `<div class="test fail"><code>${err}</code></div>`;
}