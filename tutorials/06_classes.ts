class User {
  email: string;
  name: string;
  readonly accessType: string = "read-only, write-permission";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const satyam = new User("satyamgupta@gmail.com", "satyam gupta");

export {};
