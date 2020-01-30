// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

const bigNumber = 600851475143;

function findLargestPrimeFactor(value: number): number {
    let factor = 2;

    while (value > factor) {
        if (value % factor === 0) {
            value = value / factor;
            factor = 2;
        } else {
            factor++;
        }
    }
    return factor;
}

// Output: 6857
console.log(findLargestPrimeFactor(bigNumber));