function getUpperCase(value: string) {
  let returnValue = value;
  return returnValue.toUpperCase();
}

// defining with multiple variables and their types
function signUpUser(username: string, email: string, isSignedIn: boolean) {}

console.log(getUpperCase("hey satyam ! how are you ?"));
signUpUser("satyam gupta", "satyamgupta@gmail.com", true);

// also, providing default value to an attribute
let loginUser = (
  name: string,
  email: string,
  isPaidUser: boolean = false
) => {};

// also if we think, return type should also be declared
function addNumbers(number1: number, number2: number): number {
  return number1 + number2;
}

// even if not exporting, this tells compiler to treat it like module
export {};
