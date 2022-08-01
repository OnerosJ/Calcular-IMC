/*
16 a 16,9 kgm² Muito abaixo do peso (Cauan)
17 a 18,4 kgm² Abaixo do peso (Zika dps do FF)
18,5 a 24,9 kg Peso normal
25 a 29,9 kgm² Acima do peso (Adelmo)
30 a 34,9 kgm² Obesidade grau I (João Pedro)
35 a 40 kgm²  Obesidade grau II
maior que 40 kgm² Obesidade grau III (Hadrian)
*/

const [height, weight] = document.querySelectorAll('.space');

let resultado = "";

function calculaImc() {
    return (parseFloat(weight.value)) / (parseFloat(height.value / 100) * parseFloat(height.value / 100));
}

function verificaImc() {

    const imc = parseFloat(calculaImc().toFixed(2));

    if (imc < 17) {
        resultado = `IMC:${imc} Muito abaixo do peso!`;
    } else if (imc >= 17 & imc <= 18.4) {
        resultado = `IMC:${imc} Abaixo do peso!`;
    } else if (imc >= 18.5 & imc <= 24.9) {
        resultado = `IMC:${imc} Parabens, seu IMC está normal!`;
    } else if (imc >= 25 & imc <= 29.9) {
        resultado = `IMC:${imc} Acima do peso!`;
    } else if (imc >= 30 & imc <= 34.9) {
        resultado = `IMC:${imc} Obesidade grau I!`;
    } else if (imc >= 35 & imc <= 40) {
        resultado = `IMC:${imc} Obesidade grau II!`;
    } else if (imc > 40) {
        resultado = `IMC:${imc} Obesidade grau III!`;
    }
    showResult(resultado);
}

function showResult() {
    const containerResult = document.querySelector('.containerResult');
    const resultText = document.querySelector('#resultText');

    if (resultado == '') return alert('Digite algo!');

    resultText.innerHTML = resultado;
    containerResult.style.display = 'flex';
};

document.getElementById('cal').addEventListener("click", () => {
    verificaImc();
});