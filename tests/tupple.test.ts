describe('Tupple', function () {
  it('should support tupple', function() {
    const person: readonly [string, string, number] = ['aldi', 'ramdani', 28];
    console.info(person);
    console.info(person[0]);
    console.info(person[1]);
    console.info(person[2]);

    // person[0] = "Budi"; /* Error */
  });
});