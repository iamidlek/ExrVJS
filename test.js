// const fs = require('fs')

// const book = {
//   title: 'eeeee',
//   auto: 'nlnlln'
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('testing.json',bookJSON)


const fs = require('fs')

const dataBuffer = fs.readFileSync('./ko_ko.json')


const dataJSON = dataBuffer.toString()

console.log(dataJSON)
