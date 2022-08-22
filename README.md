# ApexDB
ApexDB - Simple, light &amp; easy to use OpenSource Node.js database.
ApexDB allows you to create a database from a json file and conveniently work with it using JavaScript/TypeScript. ApexDB does not load your server, which means you have more resources for the main application to work. Below you can find examples of working with a database in JavaScript.
## Example (JavaScript)
```js
const apexDB = require("@eyeeeeer/ApexDB");

const database = new apexDB();

// Set
database.set("cats", 5);

// Get
database.get("cats"); // { "cats": 5 }

// Add
database.add("cats", 4); // Result: 9

// Has
database.has("dogs"); // false
database.has("cats"); // true

// Push
database.set("peoples", {});
database.push("peoples", { name: "John", age: 32 });
database.get("peoples"); // Output: { "name": "John", age: 32 }

// Clear
database.clear();
database.getAll(); // Output: { }
```
