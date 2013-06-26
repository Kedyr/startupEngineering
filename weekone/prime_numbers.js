module.exports = {
    getPrimes:function(num_of_primes)
    {
        var primes = [2];
        var startNum = 3;
        while(primes.length <= num_of_primes)
        {
            if(this.isPrime(startNum))
              primes.push(startNum);

            startNum++;
        }
        return primes;
    },
    isPrime:function(no)
    {
        if(no <= 2)
          return false;
        if(no % 2 ==0)
          return false;

        var root = Math.sqrt(no);
        if(this.isInt(root ))
          return false;

        for(var count = 3;count <= root;count+=2)
        { 
          if(no % count == 0)
            return false;
        }
        return true;
    },
    isInt:function(mixed_var) 
    {
        return mixed_var === +mixed_var && isFinite(mixed_var) && !(mixed_var % 1);
    },
    printPrimes:function(num_of_primes)
    { 
        var primes = this.getPrimes(num_of_primes);
        var prime_str = "";
        for(var c=0;c<primes.length;c++)
        {
            prime_str += primes[c];
            if(c + 1 < primes.length)
                prime_str += ",";
        }
        return prime_str;
    }
}
