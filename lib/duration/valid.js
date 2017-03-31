import toInt from '../utils/to-int';
import {Duration} from './constructor';
import {createDuration} from './create';

const ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

export default function isDurationValid(m) {
    for (const key in m) {
        if (!(ordering.indexOf(key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
        }
    }

    let unitHasDecimal = false;
    for (let i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
            if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }

    return true;
}

export function isValid() {
    return this._isValid;
}

export function createInvalid() {
    return createDuration(NaN);
}
