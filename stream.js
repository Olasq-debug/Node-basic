const fs = require('fs')
const path = require('path')

rs = fs.createReadStream(path.join(__dirname, 'files', 'lorem.txt'), {encoding: 'utf-8'})

ws = fs.createWriteStream(path.join(__dirname, 'files', 'newlorem.txt'))


rs.on('data', (chunkdata) =>{
    ws.write(chunkdata)
})