function sumOfPrimes(underN) {
    var total = 0;
    var toCheck = 2
    var primesSoFar = [];
    while (toCheck < underN) {
        var isPrime = true;
        for (var i = 0; i < primesSoFar.length; i++) {
            if (toCheck % primesSoFar[i] === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primesSoFar.push(toCheck);
            total += toCheck;
        } else {
            isPrime = true;
        }
        toCheck++
    }
    return total;
}
