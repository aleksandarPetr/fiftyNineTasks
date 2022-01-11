// 1. Write a program in C to display the first 10 natural numbers.

function firstTenNumbers () {
    let x = []
    for (let i = 1; i <= 10; i++) {
        x.push(i)
    }
    console.log(x.join(' '))
}

// 2. Write a C program to find the sum of first 10 natural numbers.

function sumOfFirstTenNaturalNumbers () {
    let firstTenNaturalNumbers = [];
    for (let i = 1; i <= 10; i++) {
        firstTenNaturalNumbers.push(i)
    }
    let sum = 0;
    for (let i = 0; i < firstTenNaturalNumbers.length; i++ ) {
        sum += firstTenNaturalNumbers[i];
    }
    console.log(`The first 10 natural number is : \n ${firstTenNaturalNumbers.join(' ')} \n The Sum is : ${sum}`)
}

// 3. Write a program in C to display n terms of natural number and their sum.

function sumOfFirstNNaturalNumbers(n) {
    let firstNNaturalNumbers = [];
    for (let i = 1; i <= n; i++) {
        firstNNaturalNumbers.push(i)
    }
    let sum = 0;
    for (let i = 0; i < firstNNaturalNumbers.length; i++ ) {
        sum += firstNNaturalNumbers[i];
    }
    console.log(`The first ${n} natural number is : \n ${firstNNaturalNumbers.join(' ')} \n The Sum of Natural Number up to ${n} terms : ${sum}`)
}

// 4. Write a program in C to read 10 numbers from keyboard and find their sum and average.

function tenNumbersSumAndAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    console.log(`The sum of 10 no is : ${sum} \n The Average is : ${sum/array.length}`)
}

let arr = [1, 2, 3, 5, 7, 9, 15, 23, 35, 12]

// 5. Write a program in C to display the cube of the number upto given an integer.

function cubeOfTheNumber (n) {
    for(let i = 1; i <= n; i++) {
        console.log(`Number is : ${i} and cube of the ${i} is : ${i*i*i}`)
    }
}

// 6. Write a program in C to display the multiplication table of a given integer.

function multiplicationTable(n) {
    for(let i = 1; i <= 10; i++ ) {
        console.log(`${n} X ${i} = ${n*i}`)
    }
}

// 7. Write a program in C to display the multipliaction table vertically from 1 to n.

function multiplicationTableVertically (n) {
    for(let i = 1; i <= 10; i++) {
        let array = []
        for(let j = 1; j <= n; j++) {
            let x = `${j} X ${i} = ${j * i}`
            array.push(x)
        }
        console.log(array.join(', '))
    }
}

// 8. Write a program in C to display the n terms of odd natural number and their sum.

function nTermsOfOddNaturalNumbersAndTheirSum (n) {
    let oddNumbers = []
    for(let i = 1; i <= n*2; i++) {
        if (i % 2 !== 0) {
            oddNumbers.push(i)
        }
    }
    let sum = 0;
    for (let j = 0; j < oddNumbers.length; j++) {
        sum += oddNumbers[j]
    }
    console.log(`The odd numbers are : ${oddNumbers.join(' ')} \n The Sum of odd Natural Number upto ${n} terms : ${sum}`)
}

// 9. Write a program in C to display the pattern like right angle triangle using an asterisk.

function rightAngleTriangle(n) {
    let string = ''
    for(let i = 0; i < n; i++) {
        string += '*'
        console.log(string)
    }
}

// 10. Write a program in C to display the pattern like right angle triangle with a number.

function rightAngleTriangleWithANumber(n) {
    let array = []
    for(let i = 1; i <= n; i++) {
        array.push(i)
        console.log(array.join(''))
    }
}

// 11. Write a program in C to make such a pattern like right angle triangle with a number which will repeat a number in a row.

function rightAngleTriangleWithARepeatNumber(n) {
    for(let i = 1; i <= n; i++) {
        let array = []
        for(let j = 1; j <= i; j++) {
            array.push(i)
        }
        console.log(array.join(''))
    }
}

// 12. Write a program in C to make such a pattern like right angle triangle with number increased by 1.

function rightAngleTriangleWithNumberIncreasedByOne(n) {
    let x = 1;
    for(let i = 1; i <= n; i ++) {
        let array = []
        for(let j = 1; j <= i; j++) {
            array.push(x)
            x++
        }
        console.log(array.join(' '))
    }
}

// 13. Write a program in C to make such a pattern like a pyramid with numbers increased by 1.

function pyramidWithNumbersIncreasedByOne(n) {
    let num = 0;
    let string = ''
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n - i; j++) {
            string += ' '
        }
        for(let k = 1; k <= i; k++) {
            string += ++num + ' ';
            //string += k === i ? '\n' : ' '
        }
        string += '\n';
    }
    console.log(string)
}

// 14. Write a program in C to make such a pattern like a pyramid with an asterisk.

function pyramidWithAnAsterisk() {
    let totalRowsOfAsterisk = 5;
    let total = ''
    for(let i = 1; i <= totalRowsOfAsterisk; i++) {
        for(let j = 1; j <= totalRowsOfAsterisk - i; j++) {
            total += ' '
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            total += "*";
        }
        total += '\n'
    }
    console.log(total)
}

// 15. Write a C program to calculate the factorial of a given number.

function calculateTheFactorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    console.log(`The Factorial of 5 is: ${factorial}`)
}

// 16. Write a program in C to display the n terms of even natural number and their sum.

function nTermsOfEvenNaturalNumberAndTheirSum(n) {
    let evenNumbers = []
    let sum = 0;
    for(let i = 2; i <= n*2; i++) {
        if(i % 2 === 0) {
            evenNumbers.push(i)
            sum += i
        }
    }
    console.log(`The even numbers are : ${evenNumbers.join(', ')} \n The Sum of even Natural Number upto 5 terms : ${sum}`)
}

// 17. Write a program in C to make such a pattern like a pyramid with a number which will repeat the number in the same row.

function pyramidWithARepeatingNumber(n) {
    let string = ''
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n - i; j++) {
            string += ' '
        }
        for(let k = 1; k <= i; k++) {
            string += i;
            string += k === i ? '\n' : ' '
        }
    }
    console.log(string)
}

// 19. Write a program in C to display the n terms of harmonic series and their sum.

function nTermsOfHarmonicSeriesAndTheirSum(n) {
    let array = []
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        array.push(`1/${i}`)
        sum += 1/i;
    }

    console.log(array.join(' + '))
    console.log(`Sum of Series upto ${n} terms : ${sum}`)
}

// 20. Write a program in C to display the pattern like a pyramid using asterisk and each row contain an odd number of asterisks.

function pyramidWithOddNumberOfAsterisksInRows(n) {
    let totalString = ''
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n - i; j++) {
            totalString += ' '
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            totalString += "*";
        }
        totalString += '\n'
    }
    console.log(totalString)
}

// 21. Write a program in C to display the sum of the series [ 9 + 99 + 999 + 9999 ...].

function sumOfTheSeries(n) {
    let array = []
    let string = '';
    for(let i = 1; i < n+1; i++) {
        string += '9';
        array.push(string)
    }
    let sum = 0;
    for(let j = 0; j < array.length; j++){
        sum += Number(array[j])
    }
    console.log(array.join(' '))
    console.log(`The sum of the series = ${sum}`)
}

// 22. Write a program in C to print the Floyd's Triangle.

function printTheFloydsTriangle (n) {
    let string = '';
    for(let i = 0; i < n; i++) {
        if(i % 2 === 0){
            string += '1'
        } else {
            string += '0'
        }
        console.log(string)
    }
}

// 25. Write a program in C to display the n terms of square natural number and their sum.

function nTermsOfSquareNaturalNumberAndTheirSum(n) {
    let arrayOfSquares = []
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        arrayOfSquares.push(i*i)
        sum += i*i
    }
    console.log(`The square natural upto ${n} terms are : ${arrayOfSquares.join(' ')} \n The Sum of Square Natural Number upto ${n} terms = ${sum}`)
}

// 26. Write a program in C to find the sum of the series 1 +11 + 111 + 1111 + .. n terms.

function findTheSumOfTheSeries(n) {
    let arrayOfOnes = []
    let stringOfOnes = ''
    for(let i = 1; i < n+1; i++) {
        stringOfOnes += '1';
        arrayOfOnes.push(stringOfOnes)
    }
    let sumOfElements = 0;
    for(let j = 0; j < arrayOfOnes.length; j++){
        sumOfElements += Number(arrayOfOnes[j])
    }
    console.log(arrayOfOnes.join(' '))
    console.log(`The sum of the saries = ${sumOfElements}`)
}

// 27. Write a c program to check whether a given number is a perfect number or not.

function isPerfectNumber(n) {
    let arrayOfDivisors = []
    let sumOfDivisors = 0;
    for(let i = 1; i < n; i++) {
        if(n % i === 0) {
            arrayOfDivisors.push(i)
            sumOfDivisors += i
        }
    }
    console.log(`The positive divisors : ${arrayOfDivisors.join(' ')} \nThe sum of the divisor is : ${sumOfDivisors} \nSo, the number is ${n === sumOfDivisors ? '' : 'not '}perfect.`)
}

// 28. Write a c program to find the perfect numbers within a given number of range.

function findThePerfectNumber(start, end) {
    let perfectNumbers = []
    for(let i = start; i <= end; i++) {
        let divisorsSum = 0;
        for(let j = 1; j < i; j++) {
            if(i % j === 0)
                divisorsSum += j
        }
        if (divisorsSum === i) {
            perfectNumbers.push(i)
        }
    }
    console.log(`The Perfect numbers within the given range : ${perfectNumbers.join(' ')}`)
}

// 29. Write a C program to check whether a given number is an armstrong number or not.

function isArmstrongNumber(n) {
    let nString = n.toString()
    let sumOfTheCubes = 0;
    for(let i = 0; i < nString.length; i++) {
        let cube = Number(nString[i])*Number(nString[i])*Number(nString[i])
        sumOfTheCubes += cube
    }
    console.log(`${n} is ${n === sumOfTheCubes ? '' : 'not '}an Armstrong number.`)
}

// 30. Write a C program to find the Armstrong number for a given range of number.

function findAnArmstrongNumber(start, end) {
    let armstrongArray = []
    for(let i = start; i <= end; i++) {
        let nStringNumber = i.toString()
        let cubesSum = 0;
        for(let j = 0; j < nStringNumber.length; j++) {
            let cubeNumber = Number(nStringNumber[j])*Number(nStringNumber[j])*Number(nStringNumber[j])
            cubesSum += cubeNumber
        }
        if(cubesSum === i){
            armstrongArray.push(i)
        }
    }
    console.log(`Armstrong numbers in given range are: ${armstrongArray.join(' ')}`)
}

// 31. Write a program in C to display the pattern like a diamond.

function diamondPattern(n) {
    let column = n * 2 - 1;
    for (let i = 1; i <= n; i++) {
        let stringResult1 = "";
        for (let j = 1; j <= column; j++) {
            if (j >= n + 1 - i && j <= n - 1 + i) {
                stringResult1 += "*";
            } else {
                stringResult1 += " ";
            }
        }
        console.log(stringResult1);
    }
    for (let i = n - 1; i >= 1; i--) {
        let stringResult2 = "";
        for (let j = 1; j <= column; j++) {
            if (j >= n + 1 - i && j <= n - 1 + i) {
                stringResult2 += "*";
            } else {
                stringResult2 += " ";
            }
        }
        console.log(stringResult2);
    }
}

// 32. Write a C program to determine whether a given number is prime or not.

function isPrimeNumber(n) {
    let primeDivisors = []
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            primeDivisors.push(i)
        }
    }
    console.log(`${n} is ${primeDivisors.length > 0 ? 'not ' : ''}a prime number.`)
}

// 34. Write a program in C to find the prime numbers within a range of numbers.

function primeNumbersWithinARange(start, end) {
    let allPrimeNumbers = []
    for(let i = start; i <= end; i++) {
        let primeDivisorsInNumber = []
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                primeDivisorsInNumber.push(j)
            }
        }
        if(primeDivisorsInNumber.length === 0) {
            allPrimeNumbers.push(i)
        }
    }
    console.log(`The prime number between ${start} and ${end} are : ${allPrimeNumbers.join(' ')}`)
}

// 35. Write a program in C to display the first n terms of Fibonacci series.

function nTermsOfFibonacciSeries(n) {
    let arrayFibonacci = [0, 1]
    for(let i = 2; i <= n; i++) {
        arrayFibonacci[i] = arrayFibonacci[i - 2] + arrayFibonacci[i - 1];
    }
    console.log(`Here is the Fibonacci series upto to ${n} terms : \n${arrayFibonacci.join(' ')}`)
}

// 36. Write a program in C to display the such a pattern for n number of rows using a number which will start with
//     the number 1 and the first and a last number of each row will be 1.

function pyramidWithSameFirstAndLastNumberOne(n) {
    let finalString = ''
    for(let i = 0; i <= n; i++) {
        for(let j = 1; j <= n - i; j++) {
            finalString += ' '
        }
        for(let k = 1; k <= i; k++) {
            finalString += `${k}`
        }
        for(let l = i - 1; l >= 1; l--) {
            finalString += `${l}`
        }
        finalString += `\n`
    }
    console.log(finalString)
}

// 37. Write a program in C to display the number in reverse order.

function reverseOrder(n) {
    let nString = n.toString()
    let reverseArray = []
    for(let i = nString.length -1; i >= 0; i--){
        reverseArray.push(nString[i])
    }
    console.log(`The number in reverse order is : ${reverseArray.join('')}`)
}

// 38. Write a program in C to check whether a number is a palindrome or not.

function isPalindrome(n) {
    let isPalindromeString = n.toString();
    let length = isPalindromeString.length
    for (let i = 0; i < length / 2; i++) {
        if (isPalindromeString[i] !== isPalindromeString[length - 1 - i]) {
            console.log(`${n} is not a palindrome number.`)
        } else {
            console.log(`${n} is a palindrome number.`)
        }
    }
}

// 39. Write a program in C to find the number and sum of all integer between 100 and 200 which are divisible by 9.

function sumAllIntegers(start, end) {
    let divisibleNumbers = []
    let sumAllInts = 0;
    for(let i = start; i <= end; i++ ) {
        if(i % 9 === 0) {
            divisibleNumbers.push(i)
            sumAllInts += i
        }
    }
    console.log(`Numbers between ${start} and ${end}, divisible by 9 : \n${divisibleNumbers} \nThe sum : ${sumAllInts}`)
}

// 40. Write a C Program to display the pattern like pyramid using the alphabet.

function alphabetPyramid(n) {
    let alphabetString = []
    for(let i = 1; i <= n; i++) {
        alphabetString.push(i)
        console.log(alphabetString.join(''))
    }
}

// 43. Write a C program to find HCF (Highest Common Factor) of two numbers.

function highestCommonFactor(first, second) {
    let commonFactors = []
    for(let i = 1; i < second; i++) {
        if(first % i === 0 && second % i === 0) {
            commonFactors.push(i)
        }
    }
    let highestCommonFactor = commonFactors[0];
    for(let j = 0; j < commonFactors.length; j++) {
        if(commonFactors[j] > highestCommonFactor) {
            highestCommonFactor = commonFactors[j]
        }
    }
    console.log(`HCF of ${first} and ${second} is : ${highestCommonFactor}`)
}

// 47. Write a C program to check whether a number is a Strong Number or not.

function isStrong(n) {
    let isStrongString = n.toString()
    let total = 0;
    for(let i = 0; i < isStrongString.length; i++) {
        let proizvod = 1;
        for(let j = 1; j <= isStrongString[i]; j++) {
            proizvod *= j
        }
        total += proizvod
    }
    console.log(`${n} is${n === total ? '' : ' not'} a Strong number.`)
}

// 48. Write a C program to find Strong Numbers within a range of numbers.

function isStrongWithinARange (start, end) {
    let arrayOfStrongs = []
    for(let i = start; i <= end; i++) {
        let isStrongInRangeString = i.toString()
        let ukupno = 0;
        for(let j = 0; j < isStrongInRangeString.length; j++) {
            let rezultatProizvoda = 1;
            for(let k = 1; k <= isStrongInRangeString[j]; k++) {
                rezultatProizvoda *= k
            }
            ukupno += rezultatProizvoda
        }
        if(ukupno === i) {
            arrayOfStrongs.push(i)
        }
    }
    console.log(`The Strong numbers are : \n${arrayOfStrongs.join(' ')}`)
}

// 49. Write a c program to find out the sum of an A.P. series.

function sumOfArithmeticProgression(startingNumber, numberOfItems, commonDifference) {
    let arrayOfArithmeticNumbers = []
    let sumOfArithmeticNumbers = 0
    for(let i = startingNumber; i <= numberOfItems; i++) {
        arrayOfArithmeticNumbers.push(startingNumber)
        sumOfArithmeticNumbers += startingNumber
        let nextNumber = startingNumber + commonDifference
        startingNumber = nextNumber
    }
    console.log(`The Sum of the A.P. series are : ${arrayOfArithmeticNumbers.join(' + ')} = ${sumOfArithmeticNumbers}`)
}

// 56. Write a program in C to Check Whether a Number can be Express as Sum of Two Prime Numbers.

function canNumberBeExpressAsSumOfTwoPrimeNumbers(n) {
    let sumOfTwoNumbers = ``
    for(let i = 1; i <= n/2; i++) {
        for(let j = 1; j <= n; j++) {
            if(i + j === n && primeNumber(i) && primeNumber(j)){
                sumOfTwoNumbers += `${n} = ${i} + ${j} \n`
            }
        }
    }
    console.log(sumOfTwoNumbers)
}
function primeNumber(n) {
    let primeDivisors = []
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            primeDivisors.push(i)
        }
    }
    if(primeDivisors.length === 0) {
        return true
    } else {
        return false
    }
}

// 57. Write a program in C to print a string in reverse order.

function reverseOrder(string) {
    let stringArray = []
    for(let i = 0; i < string.length; i++) {
        let stringElement = string[i]
        stringArray.push(stringElement)
    }
    let reverseString = []
    for(let j = stringArray.length; j >= 0; j--) {
        reverseString.push(stringArray[j])
    }
    console.log(`Reversed string is: ${reverseString.join('')}`)
}

// 58. Write a C program to find the length of a string without using the library function.

function lengthOfAString(string) {
    let stringLength = 0;
    for(let i =0; i < string.length; i++) {
        stringLength++
    }
    console.log(`The string contains ${stringLength} number of characters. \nSo, the length of the string welcome is : ${stringLength}`)
}

// 59. Write a program in C to check Armstrong number of n digits.

function checkArmstrongNumber(n) {
    let armstrongString = n.toString()
    let totalCubes = 0;
    for(let i = 0; i < armstrongString.length; i++) {
        let singleCube = Number(armstrongString[i])*Number(armstrongString[i])*Number(armstrongString[i])
        totalCubes += singleCube
    }
    console.log(`${n} is ${n === totalCubes ? '' : 'not '}an Armstrong number.`)
}
