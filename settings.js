/**
   * Made By HANZ 🕴️
   * Subscribe HAMZX PRESET
   * Follow https://instagram.com/syidaa._
   * Follow https://github.com/Hmzzfz
*/

const fs = require('fs')
const chalk = require('chalk')

//Ubah Disini
global.ownerNumber = ['14708122938','6285893481599','0']
global.ownerName = 'HAMZ X All Creator'
global.packname = 'HAMZX BOTZ'
global.author = 'Whatsapp Bot 2022'
global.prefa = ['','!','.','#','!'] //Ilangin Prefix Yang '' Kalau Gamau No Prefix
global.sessionName = 'sesi'

//Message Nya Ubah Disini
global.mess = {
admin: 'You Are Not Admin!',
botAdmin: 'Bot Not Admin!',
botOwner: 'You Are Not My Owner!',
group: 'Only Group!',
private: 'Only Private Chat',
wait: 'Loading...',
done: 'Done!'
}


//Sesuaikan
global.thumb = fs.readFileSync('./media/ichi.jpeg')
global.donasi = fs.readFileSync('./media/donasi.jpg')
global.thumbnail = fs.readFileSync('./media/ichi.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
