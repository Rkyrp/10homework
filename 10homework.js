function memoize(fn, cacheSize) {
    const cache = new Map();

    return function (...args) {
        const key = args.join(','); 

        if (cache.has(key)) {
            return cache.get(key); 
        }

        const result = fn(...args); 
        if (cache.size >= cacheSize) {
            const firstKey = cache.keys().next().value;
            cache.delete(firstKey);
        }
        if (![...cache.values()].includes(result)) {
            cache.set(key, result);
        }

        return result;
    };
}
function add(a, b) {
    return a + b;
}
const memoizedAdd = memoize(add, 3);
console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(2, 3)); 
console.log(memoizedAdd(3, 4)); 
console.log(memoizedAdd(4, 5)); 
