const assert = require('assert');
const passing = document.getElementById('result');
const text = document.getElementById('challenge-text');
const seed = document.getElementById('challenge-seed');
const solution = document.getElementById('challenge-solution');
const title = document.getElementById('challenge-title');

title.innerHTML = 'Add items using `splice()`';
text.innerHTML = `
<strong>Description:</strong> Remember in the last challenge we mentioned that <code>splice()</code> can take up to three parameters? Well, we can go
one step further with <code>splice()</code> &mdash; in addition to removing elements, we can use that third parameter, which represents one or more elements, to <em>add</em> them as well. 
This can be incredibly useful for quickly switching out an element, or a set of elements, for another. For instance, let's say you're storing 
a color scheme for a set of DOM elements in an array, and want to dynamically change a color based on some action:<br><br>

<pre><code>
function colorChange(arr, index, newColor) {
	arr.splice(index, 1, newColor);
	return arr;
} 

let colorScheme = ['#878787', '#a08794', '#bb7e8c', '#c9b6be', '#d1becf'];
colorScheme = colorChange(colorScheme, 2, "#332327");
// we have removed '#bb7e8c' and added '#332327' in its place
// colorScheme now equals ['#878787', '#a08794', '#332327', '#c9b6be', '#d1becf']

</code></pre><br>

This function takes an array of hex values, an index at which to remove an element, and the new color to replace the removed element with.
The return value is an array containing a newly modified color scheme! While this example is a bit oversimplified, we can see the value that 
utilizing <code>splice()</code> to its maximum potential can have.<br><br>

<strong>Instructions:</strong> We have defined a function, <code>htmlColorNames</code>, which takes an array of html colors as an argument. Modify the function
using <code>splice()</code> to remove the first two elements of the array and add <code>'DarkSalmon'</code> and <code>'BlanchedAlmond'</code> in their respective places.<br>`;

seed.innerHTML = `
function htmlColorNames(arr) {
	// change code below this line

	// change code above this line
	return arr;
} 

htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']);
`;

solution.innerHTML = `
function htmlColorNames(arr) {
	arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
	return arr;
} 
`;

function htmlColorNames(arr) {
	arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
	return arr;
} 

htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']);


try {
	assert.deepEqual(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']), ['DarkSalmon', 'BlanchedAlmond', 'LavenderBlush', 'PaleTurqoise', 'FireBrick'], "<code>htmlColorNames</code> should return ['DarkSalmon', 'BlanchedAlmond', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']");
	assert.notStrictEqual(htmlColorNames.toString().search(/\.splice\(/), -1, "The <code>htmlColorNames</code> function should utilize the <code>splice()</code> method.")
	passing.innerHTML = `<div class="test pass">Tests Pass!</div>`;
} catch (err) {
	passing.innerHTML = `<div class="test fail"><code>${err}</code></div>`;
}