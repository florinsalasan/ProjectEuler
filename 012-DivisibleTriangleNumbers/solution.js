function divisibleNumbers(minDivisors) {
    var currentTriangle = 1;
    var toAdd = 2;
    var largerThanMin = false;
    while (!largerThanMin) {
        var divisors = [1];
        for (var i = 2; i <= currentTriangle; i++) {
            if (currentTriangle % i === 0) {
                divisors.push(i);
            }
        }
        if (divisors.length > minDivisors) {
            largerThanMin = true
        } else {
            currentTriangle += toAdd;
            toAdd++;
            console.log(divisors);
        }

    }
    return currentTriangle;
}