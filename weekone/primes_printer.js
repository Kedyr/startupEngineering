 var primes = require("./prime_numbers");
 var file = require("./file");

 var num_primes_to_print = 100; 
 var filepath = "./prime_numbers.txt";

  function primePrinter(num_primes_to_print,filepath,printer)
  {
  	 var stringData = primes.printPrimes(num_primes_to_print);
  	 printer(stringData);
  }

  primePrinter(num_primes_to_print,filepath,function(data)
  {
  	 file.writeToFile(filepath,data);
  });
