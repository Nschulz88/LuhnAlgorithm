var assert = require("chai").assert;
var check = require("../lib/luhnAlgo");

describe("Luhn Algorithm", function() {
  it("checks if a CC number is valid", function() {
    var input = 3379513561108795;
    var result = check(input);
    assert.isTrue(result);
  });

  it("should return false if number is NOT a valid CC number", function() {
    var input = 3379513561108;
    assert.isFalse(check(input));
  });

  it("should return false if input number is 0", function() {
    var input = 0;
    assert.isFalse(check(input));
  });




});

