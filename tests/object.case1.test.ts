// Optional Properties
describe('Object Case 1', function () {
  it('should support in typescript', function () {
    const person: {id: string, name: string, hobbies?: string[]} = {
      id: '1',
      name: 'Aldi',
      hobbies: ['Programming']
    }

    console.info(person);

    person.id = '2';
    person.name = 'Ramdani';

    // Error
    // person.country = 'Indonesia';
  });
});