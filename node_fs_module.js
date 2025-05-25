console.log("i'm working on node at the moment");


const fs = require('fs');

fs.writeFile("output.txt", "writing file, i'm here sir", (err) => {
    if(err){
        console.log("error writing file");
    }else{
        console.log("file written");
    }
})
