function sum_array_pb1(tab1, tab2) {

    var sum = 0;
    
    for (var i = 0; i < tab1.length; i++) {
        sum += tab1[i];
    
        for (var j = 0; j < tab2.length; j++) {
            if (tab1[i] === tab2[j]) {
            sum -= tab1[i];
            }
        }
    }
    
    for (var k = 0; k < tab2.length; k++) {
        sum += tab2[k];
    
        for (var l = 0; l < tab1.length; l++) {
            if (tab2[k] === tab1[l]) {
            sum -= tab2[k];
            }
        }
    }

    return sum;
}

function sum_array_pb2(tab1, tab2) {

    var sum = 0;
    
    for (var i = 0; i < tab1.length; i++) {
    
        for (var j = 0; j < tab2.length; j++) {
            if (tab1[i] === tab2[j]) {
            sum += tab1[i] + tab2[j];
            }
        }
    }

    return sum;
}