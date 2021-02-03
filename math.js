exports.add = function (x, y) {
    // ToDo: Add the necessary code to add two numbers
    return x + y;
}

exports.sub = function (x, y) {
    // ToDo: Add the necessary code to subtract two numbers
    return x-y;
}

exports.sumOfPositiveNumbers = function (upperLimitInclusive) {
    let result = 0;
    for (let i = 1; i <= upperLimitInclusive; i++) {
        result += i;
    }
    return result;
}
