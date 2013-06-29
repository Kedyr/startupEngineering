 var fs = require("fs");

 var startup_dfn = "A startup is a business built to grow rapidly.\n";
 var filepath = "./startup_dfn.txt";

  function startupDfnPrinter(definition,filepath,printer){
  	 printer();
  }

  startupDfnPrinter(startup_dfn,filepath,function(){
	   fs.writeFileSync(filepath,startup_dfn);
  });
