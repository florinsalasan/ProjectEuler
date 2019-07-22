function primeFactors(ofThis) {
    var multiples = [1];
    var currentFactor = 2;
    while (ofThis !== 1 || currentFactor < ofThis){
        if (ofThis % currentFactor !== 0){
            currentFactor += 1;
        } else {
            ofThis /= currentFactor;
            multiples.push(currentFactor);
        }
    }
    return multiples;
}

function smallestMultiple(upTo) {
    var largestNeeded = new Map();
    var collection = [];
    for (i = upTo; i > 1; i--) {
        var toMap = primeFactors(i);
        collection.push(toMap);
    }
    for (i = collection.length; i > 1; i--) {
        var j = 0;
        while (j < toMap.length) {
            var currentFactor = toMap[j];
            var numOfCurFactor = 1;
            while (toMap[j] === toMap[j + numOfCurFactor]) {
                numOfCurFactor++;
            }
            if (largestNeeded.has(currentFactor)) {
                if (largestNeeded.get(currentFactor) < numOfCurFactor){
                    largestNeeded.set(currentFactor, numOfCurFactor);
                }
            }else{
                largestNeeded.set(currentFactor, numOfCurFactor);
            }
            j += numOfCurFactor;
            numOfCurFactor = 1;
        }
    }
    var total = 1;
    for (const key of largestNeeded.keys()) {
        total *= (key * largestNeeded[key]);
    }
    return total;

}