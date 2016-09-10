function factorial() {
     var inputFactorial= document.getElementById('inputFactorial').value;
     var numFactorial= parseInt (inputFactorial);
     var factorialResult= 1;
     for (var i=1; i <= numFactorial; i++)
     {
         factorialResult = factorialResult * i
     }
        document.getElementById('resultFactorial').value = factorialResult.toString();
}