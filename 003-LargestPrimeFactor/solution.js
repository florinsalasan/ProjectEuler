function largestPrime(ofN) {
    let largestPrime = 0;
    let primeArr = [];
    for (i = 2; i < Math.sqrt(ofN); i++){
        if (ofN % i === 0){
            isPrime = true;
            primeArr.forEach(Element => {
                if (i % Element === 0){
                    isPrime = false;
                }
            })
            if (isPrime){
                largestPrime = i;
                primeArr.push(i);
            }
        }
    }
    return largestPrime;
}

console.log(largestPrime(13195)); //Should be 29
console.log(largestPrime(600851475143)) //Should be 6857