let assert = require('assert');
let passing = document.getElementById('result');
let text = document.getElementById('challenge-text');
let seed = document.getElementById('challenge-seed');
let solution = document.getElementById('challenge-solution');
let title = document.getElementById('challenge-title');

title.innerHTML = 'Copy an array with `slice()`';
text.innerHTML = `
<strong>Description:</strong> The next method we will cover is <code>slice()</code>. <code>slice()</code>, rather than modifying an array, copies, or <em>extracts</em>, 
a given mumber of elements to a new array, leaving the array it is called upon untouched. <code>slice()</code> takes only 2 parameters &mdash; the first 
is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including
the element at this index). Consider this:

<pre><code>
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']
</code></pre> <br>

In effect, we have created a new array by extracting elements from an existing array.<br><br>

<strong>Instructions:</strong> We have defined a function, <code>forecast</code>, that takes an array as an argument. Modify the function using 
<code>slice()</code> to extract information from the argument array and return a new array that contains the elements <code>'warm'</code> and <code>'sunny'</code>.`;

seed.innerHTML = `
function forecast(arr) {
	// change code below this line
	
	return arr;
}

forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']);
	`;

solution.innerHTML = `
function forecast(arr) {
	return arr.slice(2, 4);
}
`;

function forecast(arr) {
	return arr.slice(2, 4);
}

forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']);
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']))

try {
	assert.deepEqual(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']), ['warm', 'sunny'], "<code>forecast</code> should return <code>['warm', 'sunny'].");
	assert.notStrictEqual(forecast.toString().search(/\.slice\(/), -1, "The <code>forecast</code> function should utilize the <code>slice()</code> method.");
	passing.innerHTML = `<div class="test pass">Tests Pass!</div>`;
} catch (err) {
	passing.innerHTML = `<div class="test fail"><code>${err}</code></div>`;
}