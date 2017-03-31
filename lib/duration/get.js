import {normalizeUnits} from '../units/aliases';
import absFloor from '../utils/abs-floor';

export function get(units) {
	units = normalizeUnits(units);
	return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
	return function () {
		return this.isValid() ? this._data[name] : NaN;
	};
}

export const milliseconds = makeGetter('milliseconds');
export const seconds = makeGetter('seconds');
export const minutes = makeGetter('minutes');
export const hours = makeGetter('hours');
export const days = makeGetter('days');
export const months = makeGetter('months');
export const years = makeGetter('years');

export function weeks() {
	return absFloor(this.days() / 7);
}
