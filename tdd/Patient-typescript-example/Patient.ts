class Patient {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address: string;
  heightInCm: number;

  public constructor(firstName: string, lastName: string, dateOfBirth: string, address: string, heightInCm: number) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.dateOfBirth = dateOfBirth;
      this.address = address;
      this.heightInCm = heightInCm
    }

  public getName(): string {
      return this.firstName + " " + this.lastName;
    }
}

const patient1 = new Patient("Jane", "Someone", "01/01/2020", "1 street town", 178);

const patient2 = new Patient("Sharrel", "Browne", "01/01/2020", "1 street town", 178);

console.log(patient1);
console.log(patient2);
console.log(patient2.getName());