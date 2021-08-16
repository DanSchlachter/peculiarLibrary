const MILLION = 1000000

function stressCPU() {
    const isPrime = n => {
        if (n < 2) return false
        for (let i = 2; i < n; i++)
            if (n % i === 0) return false;
        return true;
    }

    for (let i = 0; i < 1 / 10 * MILLION; i++)
        isPrime(i)
}

function exhaustHeapMemory() {
    const array = []
    for (let i = 0; i < MILLION * MILLION; i++)
        array.push(i)
}

function exhaustCallStack() {
    const recursion = n => { if (n > 0) recursion(--n) }
    recursion(MILLION)
}


module.exports = { stressCPU, exhaustHeapMemory, exhaustCallStack }