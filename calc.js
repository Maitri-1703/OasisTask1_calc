function Solve(val) {
    var vl = document.getElementById('result');
    vl.value += val;
 }
 function Result() {
    var no1 = document.getElementById('result').value;
    var no2 = eval(no1);
    document.getElementById('result').value = no2;
 }
 function Clear() {
    var input = document.getElementById('result');
    input.value = '';
 }
 function Back() {
    var ev = document.getElementById('result');
    ev.value = ev.value.slice(0,-1);
 }