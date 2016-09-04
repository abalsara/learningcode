function azitaFirstFunction() {
    var input1= document.getElementById('input1').value;
    var num1= parseInt(input1);
    var input2= document.getElementById('input2').value;
    var num2= parseInt(input2);
    var sum= num1 + num2;
    document.getElementById('result1').value = sum.toString();
}