(function() {
  window.primeFactors = function(num) {
    var primes = [], candidate = 2;
    while(num > 1) {
      while(num % candidate == 0) {
        primes.push(candidate);
        num /= candidate;
      }
      candidate++
    }
    return primes;
  };
})();
