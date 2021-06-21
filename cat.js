const fs = require('fs')

module.exports = function (){
process.stdin.on('data', (data) =>{
    const cmd = data.toString().slice(0,4)
    const filename = data.toString().slice(4).trim();
    if (cmd === "cat ") {
        fs.readFile(filename, 'utf8' , (err, data) => {
            if (err) {
                process.stdout.write(err)
                process.stdout.write('\nprompt > ')
                return
            }
            process.stdout.write(data)
            process.stdout.write('\nprompt > ')
          });
      }
    })
}
// fs.readFile(__filename, 'utf8' , (err, data) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.log(typeof data)
//   })


