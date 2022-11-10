const fs = require('fs');
fs.readFile('./user.csv','utf8',(err,data)=>{
  let temp = data.split('\r\n').splice(1,)
  for(let i of temp){
    let info = i.split(',')
    fs.mkdir(`./${info[0]}`,err=>console.log(err))
    let txt = `
    Username: ${info[0]}
    Identifier: ${info[1]}
    Job: ${info[2]}
    `
    fs.writeFile(`./${info[0]}/userinfo.txt`, txt, (err)=>{
      console.log(err);
    });
  }
})