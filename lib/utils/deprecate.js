import extend from './extend';
import {hooks} from './hooks';
import isUndefined from './is-undefined';

function warn(msg) {
	//if (hooks.suppressDeprecationWarnings === false &&
	//	(typeof console !== 'undefined') && console.warn) {
	//	 console.warn('Deprecation warning: ' + msg);
	//}
}

export function deprecate(msg, fn) {
	let firstTime = true;

	return extend(function () {
		if (hooks.deprecationHandler != null) {
			hooks.deprecationHandler(null, msg);
		}
		if (firstTime) {
			let args = [];
			let arg;
			for (let i = 0; i < arguments.length; i++) {
				arg = '';
				if (typeof arguments[i] === 'object') {
					arg += '\n[' + i + '] ';
					for (let key in arguments[0]) {
						arg += key + ': ' + arguments[0][key] + ', ';
					}
					arg = arg.slice(0, -2); // Remove trailing comma and space
				} else {
					arg = arguments[i];
				}
				args.push(arg);
			}
			warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
			firstTime = false;
		}
		return fn.apply(this, arguments);
	}, fn);
}

let deprecations = {};

export function deprecateSimple(name, msg) {
	if (hooks.deprecationHandler != null) {
		hooks.deprecationHandler(name, msg);
	}
	if (!deprecations[name]) {
		warn(msg);
		deprecations[name] = true;
	}
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;
