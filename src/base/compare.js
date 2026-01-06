import { typesToArray } from "../base";

/**
 * compare the dates
 * @since 2.0.0
 * @param {PersianDate|Date|String|Array|Object} date - the date
 * @param {'>'|'>='|'<'|'<='|'=='} operator - the operator for compare
 * @returns {Boolean} if date valid, return true or false
 */
export const compare = function (date, operator) {
	date = typesToArray(this.c, ...date);
	if (!this.isValid(...date)) return false;
	const thisTimestamp = this.timestamp();
	const otherTimestamp = this.clone().parse(...date).timestamp();
	switch (operator) {
		case '>':
			return thisTimestamp > otherTimestamp;
		case '>=':
			return thisTimestamp >= otherTimestamp;
		case '<':
			return thisTimestamp < otherTimestamp;
		case '<=':
			return thisTimestamp <= otherTimestamp;
		case '==':
		case '===':
			return thisTimestamp === otherTimestamp;
		default:
			// Handle invalid operator safely (return false or throw error)
			return false;
	}
};
