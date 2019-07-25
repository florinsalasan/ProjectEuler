// Use fibonacci's method to generate primitive triples until one is found that can divide perimeter,
// Scale the sides by the quotient obtained by dividing perimeter by sum of sides from primitive triple
// return the product of the scaled sides.

function perimeterToProduct(perimeter) {
    var a;
    var b2;
    var b;
    var c2;
    var c;
    var k = 1;
    while (a + b2 + c2 !== perimeter) {
        a = Math.sqrt(k);
        var n = (k + 1) / 2;
        debugger;
        var toAdd = 1;
        b2 = toAdd;
        for (var i = 1; i < n - 1; i++) {
            toAdd += 2;
            b2 += toAdd;
        }
        toAdd = 1;
        c2 = toAdd;
        for (var j = 1; j < n; j++) {
            toAdd += 2;
            c2 += toAdd;
        }
        debugger;
        if (k + b2 === c2) {
            if (perimeter % (a + Math.sqrt(b2) + Math.sqrt(c2)) === 0) {
                c = Math.sqrt(c2);
                b = Math.sqrt(b2);
                a *= (perimeter / (a + b + c));
                b *= (perimeter / (a + b + c));
                c *= (perimeter / (a + b + c));
                return (a * b * c);
            } 
        }
        if (a >= perimeter / 2) {
            return "No result found";
        }
        k += 2;
    }
}