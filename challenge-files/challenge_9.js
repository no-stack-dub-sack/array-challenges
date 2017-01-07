const assert = require('assert');
const passing = document.getElementById('result');
const text = document.getElementById('challenge-text');
const seed = document.getElementById('challenge-seed');
const solution = document.getElementById('challenge-solution');
const title = document.getElementById('challenge-title');

title.innerHTML = 'Iterate through all the items in an array';
text.innerHTML = `
<strong>Description:</strong> Sometimes when working with arrays, it is very handy to be able to iterate through each item to find one or more 
elements that we might need, or to manipulate an array based on which data items meet a certain set of requirements. JavaScript offers several built in methods that
each iterate over arrays in slightly different ways to achieve different results (such as <code>every()</code>, <code>forEach()</code>, <code>map()</code>,
etc.), however the technique which is most flexible and offers us the greatest amount of control is a simple <code>for</code> loop.<br><br>

For example:<br>

<pre><code>
function greaterThanTen(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 10) {
			newArr.push(arr[i]);
		}
	}
	return newArr
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// returns [12, 14, 80]
</code></pre>

Using a <code>for</code> loop, this function iterates through and accesses each element of the array, and subjects it to a simple test that we have created. 
In this way, we have easily and programmatically determined which data items are greater than 10, and returned a new array containing those items.
<br><br>

<strong>Instructions:</strong> We have defined a function, <code>filteredArray</code>, which takes <code>arr</code>, a nested array, and <code>elem</code> as arguments. 
<code>elem</code> represents an element that may or may not be present on one or more of the arrays nested within <code>arr</code>. Modify the function, using 
a <code>for</code> loop, to return a filtered array such that any array nested within <code>arr</code> containing <code>elem</code> has been removed.
`;

seed.innerHTML = `
function filteredArray(arr, num) {
	// change code below this line

	return arr;
}
`;

solution.innerHTML = `
function filteredArray(arr, num) {
  let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].indexOf(num) === -1) {
      		newArr.push(arr[i]);
		}
	}
	return newArr;
}
`;

function filteredArray(arr, num) {
  let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].indexOf(num) === -1) {
      		newArr.push(arr[i]);
		}
	}
	return newArr;
}

filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3);

console.log(filteredArray([['amy', 'beth', 'sam'], ['dave', 'sean', 'peter']], 'peter'))

try {
	assert.deepEqual(filteredArray([ [10, 8, 3], [14, 6, 23], [3, 18, 6] ], 18), [[10, 8, 3], [14, 6, 23]], "<code>filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)</code> should return <code>[[10, 8, 3], [14, 6, 23]]</code>");
	assert.deepEqual(filteredArray([ ['trumpets', 2], ['flutes', 4], ['saxaphones', 2] ], 2), [['flutes', 4]], "<code>filteredArray([['trumpets', 2], ['flutes', 4], ['saxaphones'], 2], 2)</code> should return <code>[['flutes', 4]]</code>");
	assert.deepEqual(filteredArray([['amy', 'beth', 'sam'], ['dave', 'sean', 'peter']], 'peter'), [['amy', 'beth', 'sam']], "<code>filteredArray([['amy', 'beth', 'sam'], ['dave', 'sean', 'peter']], 'peter')</code> should return [['amy', 'beth', 'sam']].");
	assert.deepEqual(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3), [], "<code>filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)</code> should return <code>[]</code>.");
	assert.notStrictEqual(filteredArray.toString().search(/for/), -1, "The <code>filteredArray</code> function should utilize a <code>for</code> loop.");
	passing.innerHTML = `<div class="test pass">Tests Pass!</div>`;
} catch (err) {
	passing.innerHTML = `<div class="test fail"><code>${err}</code></div>`;
}