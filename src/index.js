const assert = require('assert');
const passing = document.getElementById('result');
const text = document.getElementById('challenge-text');
const seed = document.getElementById('challenge-seed');
const solution = document.getElementById('challenge-solution');
const title = document.getElementById('challenge-title');

title.innerHTML = 'Create nested arrays';
text.innerHTML = `
<strong>Description:</strong> One of the most powerful feature when thinking of arrays as data structures, is that arrays can even contain, 
or be completely made up of other arrays. In this way, an array can very quickly become very complex data structure, containing an infinite
depth of arrays that contain other arrays. Consider this, for example:

<pre><code>
let nestedArray = [ 
	['deep'], // an array within an array, 2 levels of depth
	[ 
		['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
	], 
	[ 
		[ 
			['deepest'], ['deepest'] // 2 arrays nested 4 levels deep 
		], 
		[ 
			[
				['deepest-est?'] // an array nested 5 levels deep
			] 
		]
	], 
];
</code></pre>

While this example may seem convoluted, this type of complex data structure is not unheard of when dealing with large amounts of data. However, we 
can still very easily access the deepest levels of an array this complex with bracket notation:

<pre><code>
console.log(nestedArray[2][1][0][0][0]);
logs 'deepest-est?'
</code></pre>

And now that we know where that piece of data is, we can reset it if we need too:

<pre><code>
nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
now logs 'deeper still'
</code></pre>

<br><br>

<strong>Instructions:</strong> `;

seed.innerHTML = `;`;

solution.innerHTML = `;`;


try {
	
	passing.innerHTML = `<div class="test pass">Tests Pass!</div>`;
} catch (err) {
	passing.innerHTML = `<div class="test fail"><code>${err}</code></div>`;
}