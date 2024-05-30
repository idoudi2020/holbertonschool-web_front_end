const countPrimeNumbers = () => {
  let count = 0;

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
      count++;
    }
  }

  return count;
};

let start = performance.now();

for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
}

let finish = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was 
${finish - start} milliseconds`);
