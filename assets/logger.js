// Include Libs
const chalk = require("chalk");

// Logger
class apexLogger {
    constructor(pref) {
        this.pref = pref;
    }

    // Logger Log Method
    postLog(message) {
        console.log(chalk.grey(this.pref) + message);
    }

    // Logger Error Method
    postError(error) {
        console.log(chalk.red(this.pref) + error);
    }

    // Logger Warn Method
    postWarn(message) {
        console.log(chalk.yellow(this.pref) + message);
    }

    // Logger Success Message Method
    postSuccess(message) {
        console.log(chalk.green(this.pref) + message);
    }
}

// Module export
module.exports = apexLogger;