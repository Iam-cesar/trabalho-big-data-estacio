const {readFile, writeFile} = require('fs')

const file =  readFile('./updatedClient.graph.js', (err, data) => {
  writeFile('updated.ts', data.toString(), file, () => null)
});
