// Напишете функция compose която ни прави композиция от n на брой функции.

// Пример:

// var addOne = (x) => x + 1;
// var sqrt = (x) => x * x;
// var log = (x) => console.log(x);

// addOneSqrtAndPrint = compose(log, sqrt, addOne);

// addOneSqrtAndPrint(1); // 4
var addOne = (x) => x + 1;
var sqrt = (x) => x * x;
var log = (x) => x; //Math.log(x);//console.log(x);

function compose()
{
	var result = 0;
	var fns = arguments;

	return function () {
		var args = [].slice.call(arguments);
		
		for(let i=0;i<fns.length;i++)
		{
			// console.log("function "+fns[i] + " = " + fns[i](...args));
			result += fns[i](...args) || 0;
		}
		return result;
	}
}

function main()
{
	addOneSqrtAndPrint = compose(log, sqrt, addOne);
	console.log(addOneSqrtAndPrint(1)); // 4
}