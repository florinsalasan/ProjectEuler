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