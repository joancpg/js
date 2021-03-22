

let isPrime = true

for (let dividend = 2; dividend <= 10; dividend++) {
    for (let divisor = 2; divisor <= dividend; divisor++) {
        if (dividend % divisor == 0) {
            isPrime = false
        }
    }
    if (isPrime !== true) {
        console.log(`${dividend}不是質數`);
        isPrime = true;


    } else {
        console.log(`${dividend}是質數`)
    }

}

