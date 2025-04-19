// generics helps to lock certain type, and work based on that type
function getRelevantProducts<T>(searchHistory: Array<T>): T {
  // doing some database operations
  // final response got from DB API
  const finalResponse: T = searchHistory[10];
  return finalResponse;
}

// converting into arrow function
const getSearchedProducts = <T>(products: Array<T>): T => {
  // doing some complex operations
  // returned possible index
  const index: number = 100;
  return products[index];
};

// for managing extends keyword in generics
interface Database {
  connection: string;
  username: string;
  password: string;
}

function checkMultipleGenerics<T, U extends Database>(
  valueOne: T,
  valueTwo: U
): U {
  const finalResponse: U = {
    ...valueTwo,
    connection: "some connection string",
    username: "some user name",
    password: "some pass word",
  };

  return finalResponse;
}
