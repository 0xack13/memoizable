function memoize(fn, sort) {

    var cache = {};

    return function () {
        //Convert function's arguments to Array
        //Default type of the "arguments" is Object which can't be sliced.
        var args = Array.prototype.slice.call(arguments);

        if (sort) {
            args.sort();
        }

        if (cache[JSON.stringify(args)] !== undefined) {
            return cache[JSON.stringify(args)];
        }

        var result = fn.apply(this, args);
        cache[JSON.stringify(args)] = result;
        return result;
    };
}
