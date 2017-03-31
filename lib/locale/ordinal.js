export const defaultOrdinal = '%d';
export const defaultDayOfMonthOrdinalParse = /\d{1,2}/;

export function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

