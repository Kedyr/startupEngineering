 var primes = require("./primes");
 var file = require("./file");

 var num_primes_to_print = 100; 
 var filepath = "./primes.txt";

  function primePrinter(num_primes_to_print,filepath,printer)
  {
  	 var stringData = primes.printPrimes(num_primes_to_print);
  	 printer(stringData);
  }

  primePrinter(num_primes_to_print,filepath,function(data)
  {
  	 file.writeToFile(filepath,data);
  });