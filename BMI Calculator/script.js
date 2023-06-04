function calculateBMI(){
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let showOutput = document.getElementById('output');
    let classification;

    //Calculando imc
    let bmiRange = weight / (height / 100) ** 2;//Formula imc
    bmiRange = bmiRange.toFixed(2);

    if (bmiRange < 16) {
        classification = 'Delgadez severa';
    } else if(bmiRange > 16 && bmiRange < 17){
        classification = 'Delgadez moderada';
    } else if (bmiRange > 17 && bmiRange < 18.5) {
        classification = 'Delgadez leve';
    } else if (bmiRange > 18.5 && bmiRange < 25) {
        classification = 'En su peso ideal';
    } else if (bmiRange > 25 && bmiRange < 30) {
        classification = 'Sobrepeso';
    } else if (bmiRange > 30 && bmiRange < 34) {
        classification = 'Obesidad tipo 1';
    } else if (bmiRange > 35 && bmiRange < 40) {
        classification = 'Obesidad tipo 2';
    } else if (bmiRange > 40) {
        classification = 'Obesidad tipo 3';
    }

    showOutput.innerHTML = `IMC: ${bmiRange} | ${classification}`;
}