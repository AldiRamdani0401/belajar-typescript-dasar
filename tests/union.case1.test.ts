describe('Union Type Data : Case 1', function() {
  it('should support typeof operator', function() {
    function process(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(process("Aldi")).toBe("ALDI");
    expect(process(100)).toBe(102);
    expect(process(true)).toBe(false);
  });
});