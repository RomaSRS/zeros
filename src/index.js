module.exports = function getZerosCount(expression) {

  let multiplier = { '2': 0, '5': 0 };

  expression.split('*').forEach(fact => {

		let isDouble = fact.match(/!/g).length == 2 ? true : false;
		fact = fact.substring(0, fact.indexOf('!'))
		let factorialParity = fact % 2 == 0 ? true : false;

		Object.keys(multiplier).forEach(m => {
			if (isDouble && !factorialParity && m % 2 == 0) return;
			let limit = 1;
			do {
				limit *= m;
				let count = Math.floor(fact / limit);
				if (isDouble && m % 2 != 0) {
					if (factorialParity) count = Math.floor(count / 2);
					else count = Math.ceil(count / 2);
				}
				multiplier[m] += count;
			} while (limit <= fact)
		})
	})
	return Math.min(multiplier['2'], multiplier['5'])
}