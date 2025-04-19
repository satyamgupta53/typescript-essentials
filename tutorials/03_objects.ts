type User = {
  readonly _id: string; // cannot manipulate later into codes
  name: string;
  email: string;
  isActive: boolean;
  lastLoginDate?: string; // this make the property optional using ? before color (:)
};

const myUser: User = {
  _id: "1234567890",
  name: "satyam gupta",
  email: "satyamgupta@gmail.com",
  isActive: true,
  lastLoginDate: "19 apr 2025",
};

// you can create user type, used it as custom data type
function saveUser(user: User): User {
  return user;
}

console.log("----- this is how we return user datatype -----");
console.log(saveUser(myUser));

// handling complex relationships between objects
type accessDisplayName = {
  readonly _id: number;
  accessDisplayName: string;
};

type accessGroup = accessDisplayName & {
  scopes: Array<String>;
};

type organisation = {
  readonly _id: number;
  organisationName: string;
  organisationCode: string;
  accessGroupsDefined: Array<accessGroup>;
};

export {}