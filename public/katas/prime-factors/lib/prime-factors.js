(function() {
  window.primeFactors = function(num) {
    var primes = [];
    for(var candidate = 2; num > 1; candidate++) {
      for(; num % candidate == 0; num /= candidate) {
        primes.push(candidate);
      }
    }
    return primes;
  };
})();
