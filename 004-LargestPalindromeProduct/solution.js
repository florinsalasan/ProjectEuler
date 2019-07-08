function largestPalindrome(ofNDigitFactors) {
    var start_num_str = '';
    var end_number_str = '';
    for (i = 0; i < ofNDigitFactors; i++){
        end_number_str = end_number_str + '9' ;
        if (i === 0) {
            start_num_str = start_num_str + '1';
        } else {
            start_num_str = start_num_str + '0';
        }
    }
    var start_num = start_num_str.valueOf();
    var end_number = end_number_str.valueOf();
    let largestPalindrome = 0;
    for (j = end_number; j > start_num; j--){
        for (k = end_number; k > start_num; k--){
            
            var to_check = k * j;
            var to_check_str = to_check.toString();
            var to_check_len = to_check_str.length;
            var is_palindrome = true;
            for (n = 0; n < to_check_len / 2; n++){
                if (to_check_str.charAt(n) !== to_check_str.charAt(to_check_len - 1 - n)){
                    var is_palindrome = false;
                    break;
                }
            }
            if (is_palindrome){
                if (to_check > largestPalindrome){
                    largestPalindrome = to_check;
                }
            }
        }
    }
    return largestPalindrome;
}