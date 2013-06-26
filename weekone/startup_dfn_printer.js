 var file = require("./file");

 var startup_dfn = "A startup is a business built to grow rapidly.\n";
 var filepath = "./startup_dfn.txt";

  function startupDfnPrinter(definition,filepath,printer)
  {
  	 printer(filepath,definition);
  }

  startupDfnPrinter(startup_dfn,filepath,function()
  {
  	   file.writeToFile(filepath,startup_dfn);
  });
