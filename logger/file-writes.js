const fs = require("fs");
const path = require("path");

const d = fs.writeFileSync(path.join(__dirname, 'write.log'), '\nHello World SYNC', {
  flag: 'a' // open file in append mode and write the data given
});
console.log('Sync Way - Done Writing >>', d)
fs.writeFile(path.join(__dirname, 'write.log'), '\n\tHello World ASYNC', {
  flag: 'a' // open file in append mode and write the data given
}, (err, data) => {
  console.log('Done Writing - Async Way >>', err, data) 
})

console.log('Some root level lines')

