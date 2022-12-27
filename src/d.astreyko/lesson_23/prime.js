function showPrimes(from, to) {
    for (let i = 1; i <= to; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if ( n % i === 0) return false;
    }
    return true;
}

showPrimes(500, 1000)
