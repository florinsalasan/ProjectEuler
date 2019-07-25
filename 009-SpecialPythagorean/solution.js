// Based on David Vanderschel method of finding Pythagorean Triples found on:
// https://www.quora.com/How-do-I-find-pythagorean-triplets-with-one-given-number

function perimeterToProduct(perimeter) {
    var curPerimeter = 0;
    var n = 3;
    var a;
    var b;
    var c;
    while (curPerimeter !== perimeter) {
        a = n;
        if (n % 2 === 0) {
            b = ((n / 2) ** 2 - 1);
            c = ((n / 2) ** 2 + 1);
            if (a ** 2 + b ** 2 === c ** 2) {
                curPerimeter = a + b + c;
            }
        } else {
            b = ((n ** 2 - 1) / 2);
            c = ((n ** 2 + 1) / 2);
            if (a ** 2 + b ** 2 === c ** 2) {
                curPerimeter = a + b + c;
            }
        }

        if (perimeter % curPerimeter === 0) {
            var quotient = perimeter / curPerimeter;
            a *= quotient;
            b *= quotient;
            c *= quotient;
            return a * b * c;
        }

        if (n > perimeter) {
            return "No Result found"
        }
        n++;
    }
}