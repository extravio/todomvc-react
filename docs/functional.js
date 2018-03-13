// define a list
let pair = (first) => (second) => ({ first: first, second : second});
let head = (pair) => (pair.first);
let tail = (pair) => (pair.second);

let xs = pair(3)(pair(2)(pair(1)(null)))
head(xs) // 3
tail(xs) // { first: 2 second: {first : 1, second: null } }

// non-pure functions (helpers)
function list2array(xs) {
	let result = [];
	while (xs !== null) {
		result.push(head(xs));
		xs = tail(xs);
	}
	return result;
}

function array2list(arrLike) {
	let result = null;
	let xs = Array.from(arrLike).reverse();
	for (let i = 0; i < xs.length; i++) {
		result = pair(xs[i])(result)
	}
	return result;
}
// end non-pure functions

let range = (low) => (high) => ((low > high) ? null : pair(low)(range(low+1)(high)));

list2array(range(1)(100)) // [1,2,3,...,100]

let map = (f) => (xs) => (xs === null ? null : pair(f(head(xs)))(map(f)(tail(xs))));

let fizzbuzz = (x) => ( x%15 == 0 ? 'FizzBuzz' : (x%3 == 0 ? 'Fizz' : (x%5 == 0 ? 'Buzz' : x)));

// better version
let fizzbuzz = (x) => ( x%3 === 0 ? 'Fizz' : '') + (x%5 == 0 ? 'Buzz' : '') || x);

list2array(map(fizzbuzz)(range(1)(100))); // [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, ... , 98, "Fizz", "Buzz"]
