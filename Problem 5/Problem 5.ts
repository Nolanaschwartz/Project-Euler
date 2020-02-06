// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function smallestMultiple(): number {
    let product = 20;

    while (!isDivisible(product)) {
        product += 20;
    }

    return product;
}

function isDivisible(value: number): boolean {
    const multiples = [];
    let flag = true;

    for (let i = 1; i <= 20; i++) {
        multiples.push(i)
    }

    multiples.forEach(multiple => {
        if (value % multiple !== 0) {
            flag = false;
        }
    });

    return flag;
}


console.log(smallestMultiple());


