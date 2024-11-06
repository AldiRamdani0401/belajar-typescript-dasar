describe('Union Type', function() {
  it('should support in typescript', function() {
    let sample : number | string | boolean = "Aldi";
    console.info(sample);

    sample = 100;
    console.info(sample);

    sample = true;
    console.info(sample);

    // sample = [1, 2]; /* Error */
    // console.info(sample);
  })
})