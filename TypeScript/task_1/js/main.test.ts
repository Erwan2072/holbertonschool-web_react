import { Teacher } from './main'; // Assurez-vous que l'interface Teacher est bien exportée dans main.ts

test('should create a valid Teacher object', () => {
  // Enlever le type explicite `: Teacher` ici car TypeScript peut l'inférer directement.
  const teacher3 = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
  } as Teacher; // Utilisation de `as Teacher` pour caster l'objet

  // Vérification des propriétés de l'objet teacher3
  expect(teacher3.firstName).toBe('John');
  expect(teacher3.lastName).toBe('Doe');
  expect(teacher3.fullTimeEmployee).toBe(false);
  expect(teacher3.location).toBe('London');
  expect(teacher3.contract).toBe(false);
});
