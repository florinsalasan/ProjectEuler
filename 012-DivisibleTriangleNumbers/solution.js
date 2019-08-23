
function divisibleNumbers(minDivisors) {
    var currentTriangle = 1;
    var toAdd = 2;
    var largerThanMin = false;
    while (!largerThanMin) {
        divisors = 0;
        var sqrt = Math.floor(Math.sqrt(currentTriangle));
        for (var i = 1; i <= sqrt; i++) {
            if (currentTriangle % i === 0) {
                divisors += 2;
            }
        }
        if (sqrt * sqrt === currentTriangle) {
            divisors--;
        }
        if (divisors > minDivisors) {
            largerThanMin = true
        } else {
            currentTriangle += toAdd;
            toAdd++;
            console.log(divisors);
        }

    }
    return currentTriangle;
}

