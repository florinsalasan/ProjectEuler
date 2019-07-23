function nthPrime(n) {
    var nth = 0;
    var toCheck = 2
    var primesSoFar = [2];
    while (nth != n) {
        var isPrime = true;
        debugger;
        for (var i = 0; i < primesSoFar.length; i++) {
            if (toCheck % primesSoFar[i] === 0) {
                isPrime = false;
                debugger;
                break;
            }
        }
        if (isPrime) {
            debugger;
            primesSoFar.push(toCheck);
            nth++;
        } else {
            isPrime = true;
        }
        toCheck++
    }
    return primesSoFar[n-1];
}
