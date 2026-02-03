//   const fs = require('fs');
//  fs.writeFile('example.txt','Hello,World!', function(e){  
//        if(e) console.log("aaya mera error")
//    console.log("File written successfully");    
//  })

//  const fs = require('fs');
//  fs.appendFile('example.txt','Hello,World!', function(e){
//      if(e) console.log("aaya mera error")
//              console.log("File written successfully");    
// })
// const fs = require('fs');
//  fs.copyFile('example.txt','mansi.txt', function(e){
//      if(e) console.log("aaya mera error")
//              console.log("File written successfully");    
// })

// const fs = require('fs');
//  fs.rename('mansi.txt','prachi.txt', function(e){
//      if(e) console.log("aaya mera error")
//              console.log("File written successfully");    
// })


// const fs = require('fs');
// fs.unlink('example.txt', function(e){
//     if(e) console.log("aaya mera error")
//     console.log("File written successfully");    
// })

const fs = require('fs');

try {
    fs.writeFileSync("prachi.txt", "My name is prachi");
    console.log("File created successfully");
} catch (err) {
    console.log("File not created");
}

console.log("Main chalungi file create hone ke baad");


