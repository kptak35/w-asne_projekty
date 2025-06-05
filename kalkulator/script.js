let a = 5;
let b = 6;
let suma = a + b;
let roznica = a - b;
let iloczyn = a * b;
let iloraz = a / b;

// document.write('<br><br>Suma ' + a + '+' + b + '=' + suma);
// document.write('<br><br>Różnica ' + a + '-' + b + '=' + roznica);
// document.write('<br><br>Iloczyn ' + a + '*' + b + '=' + iloczyn);
// document.write('<br><br>Iloraz ' + a + '/' + b + '=' + iloraz);

let pytanie = prompt("Jakie działanie chcesz wykonać? (suma, różnica, iloczyn, iloraz)");

if(pytanie == "suma"){
    document.write('<br><br>Suma ' + a + '+' + b + '=' + suma);
}
else if(pytanie == "różnica"){
    document.write('<br><br>Różnica ' + a + '-' + b + '=' + roznica);
}
else if(pytanie == "iloczyn"){
    document.write('<br><br>Iloczyn ' + a + '*' + b + '=' + iloczyn);
}
else if(pytanie == "iloraz"){
    document.write('<br><br>Iloraz ' + a + '/' + b + '=' + iloraz);
}
