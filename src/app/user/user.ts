export class User {
    _id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;

    constructor(
        firstName: string = '',
        lastName: string = '',
        email: string = '',
        password: string = '',
        phone: string = ''
    ) {
          this.firstName = firstName;
          this.lastName = lastName;
          this.email = email;
          this.password = password;
          this.phone = phone;
      }
}
