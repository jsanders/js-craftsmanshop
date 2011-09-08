(function() {
  window.primeFactors = function(num) {
    var primes = [];
    var candidate = 2;
    while(num > 1) {
      while(num % candidate == 0) {
        primes.push(candidate);
        num = num / candidate;
      }
      candidate = candidate + 1;
    }
    if(num > 1) {
      primes.push(num);
    }
    return primes;
  };
})();
