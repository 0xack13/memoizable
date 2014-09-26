function memoize(fn, sort) {

    var cache = {};

    return function () {
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
