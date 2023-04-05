const fs = require("fs");
const path = require("path");

const d = fs.writeFileSync(path.join(__dirname, 'write.log'), '\nHello World SYNC', {
  flag: 'a'
});
console.log('Sync Way - Done Writing >>', d)
fs.writeFile(path.join(__dirname, 'write.log'), '\n\tHello World ASYNC', {
  flag: 'a'
}, (err, data) => {
  console.log('Done Writing - Async Way >>', err, data) 
})

console.log('Some root level lines')

