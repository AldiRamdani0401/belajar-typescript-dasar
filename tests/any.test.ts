describe('Any', function () {
  it('should support in typescript', function () {
    const person: any = {
      id: 1,
      name: 'Aldi Ramdani',
      age: 28
    };

    person.age = 29;
    person.country = 'Indonesia';

    console.log(person);
  })
});