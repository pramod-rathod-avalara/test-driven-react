const palindromes = require("../src/palindromes");

describe("palindromes()", () => {
  it("correctly identifies one word palindromes", () => {
    expect(palindromes("madam")).toEqual(["madam"]);
    expect(palindromes("racecar")).toEqual(["racecar"]);
  });
});
