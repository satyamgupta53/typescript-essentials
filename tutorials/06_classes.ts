// we can define and initialize seprately also before constructor
interface BasicInformation {
  email: string;
  name: string;
  contact: number;
}

class User implements BasicInformation {
  private static _uniqueCount: number = 0;
  private readonly accessType: string = "read-only, write-permission";
  constructor(
    public email: string,
    public name: string,
    public contact: number
  ) {
    this.email = email;
    this.name = name;
    User._uniqueCount += 1;
  }

  get getAppleEmail(): string {
    return `id:${this.email}.apple`;
  }

  get getUniqueCount(): string {
    return `Total unique users available are : ${User._uniqueCount}`;
  }

  set setUniqueCount(uniqueCount: number) {
    if (uniqueCount <= 0)
      throw new Error("Unique count should always be greater than 0.");
    User._uniqueCount = uniqueCount;
  }
}

// access control through private keyword, making it accessible within the class
// you can also define like: #accessType = "accessInformation" (classic js)
const satyam = new User("satyamgupta@gmail.com", "satyam gupta", 123456789);
console.log(satyam.getAppleEmail);
console.log(satyam.getUniqueCount);

const newUser = new User("newUser@gmail.com", "new user", 234567890);
newUser.setUniqueCount = 10;
console.log(newUser.getUniqueCount);

export {};
