var a = 1;
var b = 2;
var f = 0;
var sum = 0;

while (a < 4000000) {

  if(a % 2 === 0) {
    sum += a;
  }
  f = a + b;
  a = b;
  b = f;

}
 
 console.log(sum);