function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

var daNumber = 600851475143;

for (var j=2; j < daNumber; j++){
  if (daNumber % j === 0 && isPrime(j)){
    x = j;
  }
}

console.log(x);