var baseRetangulo = parseFloat(prompt("Informe a base do retângulo:"));
var alturaRetangulo = parseFloat(prompt("Informe a altura do retângulo:"));

var areaRetangulo = baseRetangulo * alturaRetangulo;

alert("A área do retângulo é: " + areaRetangulo);

var ladoQuadrado = parseFloat(prompt("Informe o lado do quadrado:"));

var areaQuadrado = Math.pow(ladoQuadrado, 2);

alert("A área do quadrado é: " + areaQuadrado);

var diagonalMaior = parseFloat(prompt("Informe a diagonal maior do losango:"));
var diagonalMenor = parseFloat(prompt("Informe a diagonal menor do losango:"));

var areaLosango = (diagonalMaior * diagonalMenor) / 2;

alert("A área do losango é: " + areaLosango);

var baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"));
var baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"));
var alturaTrapezio = parseFloat(prompt("Informe a altura do trapézio:"));

var areaTrapezio = ((baseMaior + baseMenor) * alturaTrapezio) / 2;

alert("A área do trapézio é: " + areaTrapezio);

var baseParalelogramo = parseFloat(prompt("Informe a base do paralelogramo:"));
var alturaParalelogramo = parseFloat(prompt("Informe a altura do paralelogramo:"));

var areaParalelogramo = baseParalelogramo * alturaParalelogramo;

alert("A área do paralelogramo é: " + areaParalelogramo);

var baseTriangulo = parseFloat(prompt("Informe a base do triângulo:"));
var alturaTriangulo = parseFloat(prompt("Informe a altura do triângulo:"));

var areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

alert("A área do triângulo é: " + areaTriangulo);

var raioCirculo = parseFloat(prompt("Informe o raio do círculo:"));

var areaCirculo = Math.PI * Math.pow(raioCirculo, 2);

alert("A área do círculo é: " + areaCirculo);
