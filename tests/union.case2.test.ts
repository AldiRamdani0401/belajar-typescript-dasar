describe('Union Type Data : Case 2', function() {
  it('should support switch case', function() {
    function process(value: number | string | boolean) {
      switch (typeof value) {
        case "string":
          return value.toUpperCase();
        case "number":
          return value + 2;
        case "boolean":
          return !value;
      }
    }

    expect(process("Aldi")).toBe("ALDI");
    expect(process(100)).toBe(102);
    expect(process(true)).toBe(false);
  });
});
