console.log("hello")
const fs = require('fs')
const path = require('path')
const {add,sub,mul,div} = require('./math');
const fsPromises = require('fs').promises;

const fsPromise = async () =>{

    let dataFile = await fsPromises.readFile(path.join(__dirname,'new.text'),'utf8')
    console.log(dataFile);
    await fsPromises.writeFile(path.join(__dirname,'newTwo.text'),"\n\n asyn await method")
    await fsPromises.appendFile(path.join(__dirname,'newFour.text'),"\n\n\nnew line added using async await method");
    await fsPromises.unlink(path.join(__dirname,'newFour.text'));
}

fs.mkdir('./newPath',(err)=>{
  console.log(err)
})

fsPromise()







/* console.log(path.join(__dirname,'new.text'));
fs.readFile(path.join(__dirname,'new.text'),"utf8",(err,data)=>{
    if(err) throw err 
    console.log(data)
})
console.log(add(5,8));

fs.writeFile(path.join(__dirname,'new2.text'),'this is new file written with writeFile method',(err) => {
   console.log('file created');
  fs.appendFile(path.join(__dirname,'new2.text'),'\n\n gonna add couple of lines',(err)=>{
    console.log('file updated');
    fs.rename(path.join(__dirname,'new2.text'),path.join(__dirname,'newTwo.text'),(err)=>{
        console.log('file name changed')
    })
  })
}) */