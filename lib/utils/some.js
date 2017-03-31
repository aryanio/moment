let some;
if (Array.prototype.some) {
	some = Array.prototype.some;
} else {
	some = function (fun) {
		const t = Object(this);
		const len = t.length >>> 0;

		for (let i = 0; i < len; i++) {
			if (i in t && fun.call(this, t[i], i, t)) {
				return true;
			}
		}

		return false;
	};
}

export {some as default};
