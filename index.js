function calculate(x) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    let result;

    switch (x) {
        case 'suma':
            result = ((a, b) => a + b)(num1, num2);
            break;
        case 'resta':
            result = ((a, b) => a - b)(num1, num2);
            break;
        case 'multiplicar':
            result = ((a, b) => a * b)(num1, num2);
            break;
        case 'dividir':
            result = ((a, b) => b !== 0 ? a / b : 'Error')(num1, num2);
            break;
        case 'lineal':
            result = resolverEcuacionLineal(num1, num2);        
            break;
        case 'cuadratica':
            result = resolverEcuacionCuadratica(num1, num2, num3);
            break;
        case 'triangulo':
            result = evaluarTriangulo(num1, num2, num3);
            break;
        case 'factorial':
            result = calcularFactorial(num1);
            break;
        default:
            result = ' no válido ';
    }

    document.getElementById('result').value = result;
}


function resolverEcuacionLineal(a, b) {
    if (a === 0) return 'error';
    return -b / a;
}


function resolverEcuacionCuadratica(a, b, c) {
    const cuadraticaa = b * b - 4 * a * c;
    if (cuadraticaa < 0) return 'No tiene solución';
    const x1 = (-b + Math.sqrt(cuadraticaa)) / (2 * a);
    const x2 = (-b - Math.sqrt(cuadraticaa)) / (2 * a);
    return `x1 = ${x1}, x2 = ${x2}`;
}


function evaluarTriangulo(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) return 'No es un triángulo';
    if (a === b && b === c) return 'Triángulo equilátero';
    if (a === b || a === c || b === c) return 'Triángulo isósceles';
    return 'Triángulo escaleno';
}


const calcularFactorial = function (n) {
    if (n < 0 || !Number.isInteger(n)) return ' entero positivo';
    if (n === 0 || n === 1) return 1;
    return n * calcularFactorial(n - 1);
};