import {add,sub,mul,div} from './math.js';
import { readFile } from 'fs';

console.log(add(4,5));
readFile('./new.text',"utf8",(err,data)=>{
    if(err) throw err
    console.log(data)
})