let container = document.getElementById("box-container");
for (i = 1; i <= 100; i++) {
    
    let value;
    let n;

    // controllo se i sia un divisore sia di 5 che di 3 
    if ( i % 3 == 0 && i % 5 == 0 ) {
        value = "fizzbuzz"
        n = value;
    }

    // controllo se sia un divisore di 3
    else if (i % 3 == 0) {
        value = "fizz";
        n = value;
    }

    // controllo se sia un divisore di 5
    else if (i % 5 == 0) {
        value = "buzz";
        n = value;
    }

    // passo standard 
    else {
        value = "normal"
        n = i;
    }

    const elem = `<div class= " box box-${value}">${n}</div> `
    container.innerHTML += elem;
}
