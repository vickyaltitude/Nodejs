let {format} = require('date-fns');
let path = require('path');
let fsPromises = require('fs').promises;
let {v4 : uuid} = require('uuid');
let fs = require('fs');

let addEvents = async (msg) => {
     
    const dates = format(new Date(),'dd-MM-yyy\tHH:mm:ss');
    const datas = `${dates}\t${uuid()}\t${msg}\n`;
    
    try{
        if(!(fs.existsSync(path.join(__dirname,'newPath')))){
            await fsPromises.mkdir(path.join(__dirname,'newPath'));
         }
     
         await fsPromises.appendFile(path.join(__dirname,'newPath','logDetails.text'),datas)
    }catch(err){
        console.error(err)
    }
   
}

module.exports = addEvents;