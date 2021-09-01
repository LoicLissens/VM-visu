const dns = require('dns')
import { promisify } from 'util';
import chalk from 'chalk';
const rl= require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
// check for connection to continue
dns.lookup('google.com', function (err: any) {
    if (err) {
        console.log(chalk.blue.bgRed.bold("Error:Connection not found"))
        process.exit()
    }
})
