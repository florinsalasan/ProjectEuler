function multiplesOf(upTo) {
    
    let total = 0;

    for (i = 0; i < upTo; i++) {
        if (i % 3 === 0 || i % 5 === 0){
            total += i;
        }
    }

    return total;

}

console.log(multiplesOf(10));

console.log(multiplesOf(1000));