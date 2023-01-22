const fs = require('fs')
const fspromises = require('fs/promises')
const path = require('path')
// Using asynchronous arrow function
const fileOps = async () =>{
    try{
           const  data = await fspromises.readFile('./files/starter.txt', 'utf8')
           console.log(data)
           await fspromises.unlink(path.join(__dirname, 'files', 'starter.txt'))
           await fspromises.writeFile(path.join(__dirname, 'files', 'newFile.txt'), 'Hello everyone')
           await fspromises.appendFile('./files/newFile.txt', '\n I hate you')
           const newData = await fspromises.readFile(path.join(__dirname, 'files', 'newFile.txt'))
           console.log(newData.toString())
    }catch (err) {
        console.error(err)
    }
}

// Synchronous method to write, read and append to a file
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), (err, data) =>{
    if (err) throw err;
    console.log(data.toString())
})
fs.writeFile(path.join(__dirname, 'files', 'reply.txt',), 'You are welcome!', (err) =>{
    if (err) throw err;
    console.log('Write to file')
})

fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nHello baby', (err) =>{
    if (err) throw err;
    console.log('Write completed!')
})

// listen to uncaught errors
process.on('uncaughtException', (err) =>{
    console.error('Uncaughterror was detected!', err)
    process.exit(1)
})