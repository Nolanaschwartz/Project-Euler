// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

function largestPalindromeNumber(): Array<number> | undefined {
    let product = 0;
    let multiplierOne = 0;
    let multiplierTwo = 0;

    for (let x = 999; x > 0; x--) {
        for (let y = 999; y > 0; y--) {
            if (isPalindrome(x * y) && (x * y > product)) {
                product = x * y;
                multiplierOne = x;
                multiplierTwo = y;
            }
        }
    }
    return [multiplierOne, multiplierTwo]
}

function isPalindrome(value: number): boolean {
    const numberString = value.toString();
    for (let i = 0; i < numberString.length; i++) {
        if (numberString[i] !== numberString[numberString.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

const [x, y] = largestPalindromeNumber();
console.log(x + ' * ' + y + ' = ' + x * y);