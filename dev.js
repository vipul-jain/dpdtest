console.log('server starting!')
var deployd = require('deployd');

var options = {
  port:process.env.PORT || 8080,
  db:{
    port:49288,              
    host:"ds049288.mongolab.com", 
    name:"shopping",      
    credentials:{            
      username:"wa", 
      password:"wa"  
    }
  }

};
var server = deployd(options);
server.listen();
console.log('server running!');