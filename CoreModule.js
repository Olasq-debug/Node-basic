const os = require('os')
const path = require('path')
const {add, divide, mult, substr, } = require('./math')

console.log(add(4, 2))
console.log(substr(3, 5))
console.log(mult(4, 5))
console.log(divide(5, 2))

console.log(os.version())
console.log(os.homedir())
console.log(os.type())

console.log(__dirname)
console.log(__filename)


console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))


