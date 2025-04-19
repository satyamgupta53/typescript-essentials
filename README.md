## Important Points
It is a superset of JS, but, doesn’t adds new features, instead brings type safety (static checking). `npm install -g typescript` install globally. Important types includes String, Number, Boolean, Null, Undefined, Void, Object, Array, Tuples and Enum. All types are in lowercase letters and example implementation — `let variable_name: type_name = variable_value;`. To compile and run in single step `npm install -g ts-node`.

For intentional crashes in any function, return type set to never, otherwise use void. We can use pipe `|` , for union of different return types. Tuples are TS specific feature allowing to input data in a specific order, maybe coming from API call.

To setup typescript for real projects — `tsc --init` to initialize `tsconfig.json` file, make file structure into `src/` for code files and `dist/` for the compilation into JS. Add `"watch": "tsc -w"` and use `npm run watch` to watch TS code changes, and dynamically compile into distribution folder.

If implementing any interface, class should at least have minimum those abstract properties or methods available in the interface defined. Try not to include private properties or methods, as it is meant to be public, for classes to implement. Generic helps is building components that can be reusable.

In operator is also used in type narrowing, use `if("isAdmin" in account)` to verify, if it of User | Admin. If any variable created using new keyword or constructor, we use `x instanceof Date` to find the right type. Exhaustive type checking is very useful, multiple implementations.

```tsx
interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}
```
