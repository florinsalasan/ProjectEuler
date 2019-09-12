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
    for (var i = startingLimit; i > 0; i--){
        
    }
}