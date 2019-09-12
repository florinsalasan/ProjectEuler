function longestCollatz(startingLimit) {
    var pastSequences = new Map();
    //key will be the value already seen, value will be the length of the squence including the key and 1;
    //For each Collatz sequence run through, each value will be added to the map or used to determine the length 
    //of the remainder of the sequence: ie say you start with 13 as startingLimit: 13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1 will all
    //be added to an array collecting the values gone through for the value of i, then each one will be added to pastSequences by taking the length of the array
    //and subtracting the index of the value to indicate the length of the sequence from that number including start and end values. There will also be a check for
    //each number in the sequence to see if the length is written in the Map, at which point the value from the map will be added to the determined length of the previous 
    //items in the sequence and each one will be added to the Map. Seems like it might be rather space inefficient before starting. Thus on a second run, starting at 10, 
    //the 10 will be in the Map along with the length of its sequence, hopefully reducing the number of calculations that are necessary.
    var valueWithLargestChain = startingLimit;
    var largestChainLength = 1;
    for (var i = startingLimit; i > 0; i--) {
        var valuesSeenSoFar = [];
        var toGetToOne = i;
        valuesSeenSoFar.concat(toGetToOne)
        while (toGetToOne != 1) {
            if (!pastSequences.has(toGetToOne)) {
                //the check if the value is already in the map, continues the sequence
                if (toGetToOne % 2 == 0) {
                    toGetToOne /= 2;
                    valuesSeenSoFar.concat(toGetToOne);
                } else {
                    toGetToOne = 3 * toGetToOne + 1;
                    valuesSeenSoFar.concat(toGetToOne);
                }
            } else {
                break;
            }
        }
        if (toGetToOne !== 1) {
            for (var toSubtract = 0; toSubtract < valuesSeenSoFar.length; toSubtract++) {
                //Loop adds the length of the sequence of toGetToOne to the length of all values that had been gone through
                pastSequences.set(valuesSeenSoFar[i], valuesSeenSoFar.length - toSubtract + pastSequences.get(toGetToOne));
            }
        } else {
            //The loop needed to add ALL values to the map since none of them have been seen and thus the while loop was never cut early:
            for (var toSubtract = 0; toSubtract < valuesSeenSoFar.length; toSubtract++) {
                pastSequences.set(valuesSeenSoFar[i], valuesSeenSoFar.length - toSubtract);
            }
        }
        if (valuesSeenSoFar.length > largestChainLength) {
            largestChainLength = valuesSeenSoFar.length;
            valueWithLargestChain = i;
        }
    }
    return valueWithLargestChain;
}