function evenFib(upTo) {
    let total = 0;
    let x = 0;
    let y = 1;
    let z = x + y;
    if (z < upTo) {
        while (z < upTo) {
            x = y;
            y = z;
            z = x + y;
            if (z < upTo) { //only checks to add if z is less than the max value of a fibonacci number specified as upTo
                if (z % 2 === 0) {
                    total += z;
                }
           }        
        }
    }
    return total;
}
console.log(evenFib(4000000)); //Should be equal to 4613732;
console.log(evenFib(10)); //Should be equal to 10;