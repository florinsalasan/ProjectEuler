function triangleGenerator(nthTriangle) {
    var total = 0;
    for (var j = 0; j <= nthTriangle; j++){
        total += j;
    }
    return total;
}

function smallestTriangleWith(minimumNDivisors) {
    var currentN = 1;
    var currentTriangle = triangleGenerator(currentN);
    var hasNDivisors = false;
    var divisors = [1];
    var knownDivisors = new Map();
    while (!hasNDivisors) {
        for (var i = currentTriangle; i > 1; i--){
            if (currentTriangle % i === 0) {
                debugger;
                if (knownDivisors.has(i)) {
                    var toConcat = knownDivisors.get(i);
                    divisors = divisors.concat(toConcat);
                    var duplicates = new Map();
                    for (var k = 0; k < divisors.length; k++){
                        if (duplicates.has(divisors[k])) {
                            divisors.splice(k, 1);
                        } else {
                            duplicates.set(k, 1);
                        }
                    }
                } else {
                    divisors.push(i)
                    knownDivisors.set(i, divisors);
                }
            }
        }
        if (divisors.length > minimumNDivisors) {
            hasNDivisors = true;
        } else {
            currentN++;
            currentTriangle = triangleGenerator(currentN);
        }
    }
    return currentTriangle;
}