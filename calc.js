calculateButton.addEventListener('click', calcularIdd);

function calcularIdd() {
  const datadeNasc = new Date(birthdateInput.value);
  const hoje = new Date();

  const iddEmMilissegundos = hoje - datadeNasc;
  const iddEmAnos = 
  Math.floor(iddEmMilissegundos /(1000 * 60 * 60 * 24 * 365.25));

  if(iddEmAnos >= 0) {
    resultElement.textContent = 'Você tem ${iddEmAnos}';
  }else{
    resultElement.textContent = 'Inválido';
  }
}
