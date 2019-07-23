function sumSquares(upTo) {
    var normalSum = 0;
    for (i = 0; i <= upTo; i++) {
        normalSum += i*i;
    }
    var squareSum = 0;
    for (j = 0; j <= upTo; j++) {
        squareSum += j;
    }
    squareSum *= squareSum;
    return squareSum - normalSum;
}