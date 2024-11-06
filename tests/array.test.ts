describe('Array', function(){
  it('should same with javascript', function(){
    const names: string[] = ['aldi', 'budi', 'caca'];
    const values: number[] = [1, 2, 3];

    console.info(names);
    console.info(values);
  });

  it('should support readonly array', function() {
    const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];
    console.info(hobbies);
    console.info(hobbies[0]);
    console.info(hobbies[1]);
    // hobbies[0] = "Main"; /* Error */
  })
});