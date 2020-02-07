// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//
// What is the 10 001st prime number?

const indexOfPrime = 10001;

function nthPrime(value: number): number {
    let number = 2;
    let index = 1;

    while (index < value) {
        number++;
        if (isPrime(number)) {
            index++;
        }
    }

    return number;
}

function isPrime(value: number): boolean {
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            return false
        }
    }
    return value > 1;
}

console.log(nthPrime(indexOfPrime));