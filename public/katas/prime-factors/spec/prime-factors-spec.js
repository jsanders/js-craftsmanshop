describe("#primeFactors", function() {
  it("finds no factors for 1", function() {
    expect(primeFactors(1)).toEqual([]);
  });

  it("finds 2 as a prime factor of 2", function() {
    expect(primeFactors(2)).toEqual([2]);
  });

  it("finds 3 as a prime factor of 3", function() {
    expect(primeFactors(3)).toEqual([3]);
  });

  it("finds [2, 2] as prime factors of 4", function() {
    expect(primeFactors(4)).toEqual([2, 2]);
  });

  it("finds [2, 3] as prime factors of 6", function() {
    expect(primeFactors(6)).toEqual([2, 3]);
  });

  it("finds [2, 2, 2] as prime factors of 8", function() {
    expect(primeFactors(8)).toEqual([2, 2, 2]);
  });

  it("finds [3, 3] as prime factors of 9", function() {
    expect(primeFactors(9)).toEqual([3, 3]);
  });

  it("finds [5, 2] as prime factors of 10", function() {
    expect(primeFactors(10)).toEqual([2, 5]);
  });

  it("finds [11] as prime factors of 11", function() {
    expect(primeFactors(11)).toEqual([11]);
  });

  it("finds [2, 2, 3] as prime factors of 12", function() {
    expect(primeFactors(12)).toEqual([2, 2, 3]);
  });

  it("finds [2, 2, 3] as prime factors of 12", function() {
    expect(primeFactors(12)).toEqual([2, 2, 3]);
  });
});
