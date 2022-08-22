// Include libs
const nodeFS = require("fs");

// Include Components
const loggerComponent = require("./assets/logger");

// Logger
const logger = new loggerComponent("[ApexDB]");

// Database Manager
class apexManager {
    constructor(apexDBName) {
        this.dbFile = apexDBName || "./apexDB.json" || "apex.json";
        this.apexDB = {};

        // Search DB
        if(!nodeFS.existsSync(this.dbFile)) {
            logger.error("Apex database file created. If you already had a database file but it wasn't found, make sure it's in the project's root directory and has the name you specified in the Apex configuration. Please note that the file must be in json format! You can also use one of the standard file names: apex.json or apexDB.json.");
            return nodeFS.writeFileSync(this.dbFile, "{}", "utf-8");
        } else {
            this.apexDBFile();
        }
    }

    // Database File Method
    file() {
        const savedData = JSON.parse(nodeFS.readdirSync(this.dbFile));
        if(typeof savedData === "object") {
            this.apexDB = savedData;
        }
    }

    // Save Data Method
    save() {
        return nodeFS.writeFileSync(this.dbFile, JSON.stringify(this.apexDB, null, 2), "utf-8");
    }

    // Get database value
    get(key) {
        if(!key) {
            return logger.error("You didn't provide a key to search the Apex database.");
        }
        return this.apexDB[key];
    }

    // Validator has
    has(key) {
        if(!key) {
            return logger.error("You didn't provide a key to search the Apex database.");
        }
        return Boolean(this.apexDB[key]);
    }

    // Set Method
    set(key, value) {
        if(!key) {
            return logger.error("You didn't provide a key to set data in the Apex database.");
        }
        if(!value) {
            return logger.error("You didn't provide a key value to store in the Apex database.")
        }

        this.apexDB[key] = value;
        return this.save();
    }

    // Drop Method
    drop(key) {
        if(!key) {
            return logger.error("You didn't provide a key to drop data in the Apex database.");
        }

        delete this.apexDB[key];
        return this.save();
    }

    // Add Method
    add(key, count) {
        if(!key) {
            return logger.error("You didn't provide a key to add data in the Apex database.");
        }
        if(!count) {
            return logger.error("Enter the count you would like to add.");
        }
        if(!this.apexDB[key]) {
            this.apexDB[key] = 0;
        }

        this.apexDB[key] -= count;
        return this.save();
    }

    // Use Method
    use(key, count) {
        if(!key) {
            return logger.error("You have not specified the key you will be sub!");
        }
        if(!count) {
            return logger.error("You have not specified the count which one will you sub from the current!");
        }
        if(!this.apexDB[key]) {
            this.apexDB[key] = 0;
        }

        this.apexDB[key] -= count;
        return this.save();
    }

    // Push Method
    push(key, element) {
        if(!key) {
            return logger.error("You have not specified the key to which you will push!");
        }
        if(!element) {
            return logger.error("You have not specified the key to which you will push!");
        }
        if(!this.apexDB[key]) {
            this.apexDB[key] = [];
        }

        this.apexDB[key].push(element);
        return this.save();
    }

    // Clear Database Function
    clear() {
        this.apexDB = {};
        return this.save();
    }

    // Get all items from Database
    getAll() {
        return this.apexDB;
    }
}

// Module Export
module.exports = apexManager;