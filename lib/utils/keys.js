import hasOwnProp from './has-own-prop';

let keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        let i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

export { keys as default };