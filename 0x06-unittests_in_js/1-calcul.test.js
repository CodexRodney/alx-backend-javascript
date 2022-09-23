const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

describe('calculateNumber', () => {
	describe('SUM', () => {
		it('', () => {
			assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
		})
	});
	describe('SUBTRACT', () => {
		it('', () => {
			assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
		})
	});
	describe('DIVIDE', () => {
		it('', () => {
			assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
		})
	});
	describe('DIVIDE', () => {
		it('', () => {
			assert.equal(calculateNumber('DIVIDE', 4, 0), 'Error');
		})
	});
})
