function calculateIMC() {
    var name = document.getElementById('name').value;
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
  
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      alert('Por favor, insira valores válidos para altura e peso.');
      return;
    }
  
    var imc = weight / (height * height);
    var resultMessage = getResultMessage(imc);
  
    document.getElementById('result').innerHTML = `<p>${name}, seu IMC é: ${imc.toFixed(2)}</p><p>${resultMessage}</p>`;
  }
  
  function getResultMessage(imc) {
    if (imc < 18.5) {
      return 'Você está abaixo do peso.';
    } else if (imc < 24.9) {
      return 'Seu peso está saudável.';
    } else if (imc < 29.9) {
      return 'Você está com sobrepeso.';
    } else {
      return 'Você está obeso(a).';
    }
  }
  