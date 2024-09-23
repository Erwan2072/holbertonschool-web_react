// Export de l'interface Teacher
export interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[propName: string]: any;
  }

  // Objet Teacher
  const teacher3: Teacher = {
	firstName: 'John',
	lastName: 'Doe',
	fullTimeEmployee: false,
	location: 'London',
	contract: false,
  };

  console.log(teacher3);
