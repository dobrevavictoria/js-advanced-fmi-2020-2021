// Напишете фунцкия memoize, която изпълнените до момента резултати на дадена функция, в зависимост от подадените аргументи. Т.е. ако при подаване на същите аргументи, тя директно връща резултат.

// Пример:

// var sum = function (x, y) { return x + y; }
// var memSum = memoize(sum);
// console.log(memSum(2,3)); // пресмята, връща 5
// console.log(memSum(3,3)); // пресмята, връща 6
// console.log(memSum(2,3)); // директно връща 5 без да смята

var sum = function (x, y) { return x + y; }

function memoize(fn)
{
	var storeMap = new Map();

	return function () {
		var args = [].slice.call(arguments);
		var key = args.toString();
		if (storeMap.has(key)) 
		{
			console.log("Has already value");
			return storeMap.get(key);
		}
		var result = fn(...args);
		storeMap.set(key, result);

		console.log(storeMap);
		return result;
	}
}

function main()
{
	var promenliva = memoize(sum);
	console.log(promenliva(2,3));
	console.log(promenliva(3,3));
	console.log(promenliva(2,3));
}