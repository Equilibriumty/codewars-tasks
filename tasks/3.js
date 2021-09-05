const arrayDiff = (a, b) => {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            result.push(a[i]);
        }
    }
    return result;
};

console.log(arrayDiff([1, 2, 3], [1, 2]));
console.log(arrayDiff([3, 4], [3]));
