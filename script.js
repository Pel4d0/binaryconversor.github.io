document.addEventListener('DOMContentLoaded', function () {
    const numeroDecimalInput = document.getElementById('numeroDecimal');
    const convertirBtn = document.getElementById('convertirBtn');
    const resultadosTableBody = document.querySelector('table tbody');
  
    convertirBtn.addEventListener('click', convertirSinSuma);
  
    function convertirSinSuma() {
      const numeroDecimal = parseInt(numeroDecimalInput.value);
  
      if (isNaN(numeroDecimal)) {
        alert('Por favor, ingrese un número decimal válido.');
        return;
      }
  
      // Limpia las celdas anteriores
      resultadosTableBody.innerHTML = '';
  
      // Realiza la conversión y agrega las filas a la tabla
      agregarFilaResultado('BCD Aiken', convertirDecimalABCD(numeroDecimal, 'aiken'));
      agregarFilaResultado('BCD Natural', convertirDecimalABCD(numeroDecimal, 'natural'));
      agregarFilaResultado('BCD Grey', convertirDecimalABCD(numeroDecimal, 'grey'));
      agregarFilaResultado('BCD Exceso-3', convertirDecimalABCD(numeroDecimal, 'exceso3'));
      agregarFilaResultado('Hexadecimal', convertirDecimalAHexadecimal(numeroDecimal));
    }
  
    function agregarFilaResultado(tipoBCD, resultado) {
      const fila = document.createElement('tr');
      const tipoBCDCelda = document.createElement('td');
      tipoBCDCelda.textContent = tipoBCD;
      const resultadoCelda = document.createElement('td');
      resultadoCelda.textContent = resultado;
      fila.appendChild(tipoBCDCelda);
      fila.appendChild(resultadoCelda);
      resultadosTableBody.appendChild(fila);
    }
  
    function convertirDecimalABCD(numeroDecimal, tipoBCD) {
      let resultado = '';
  
      if (tipoBCD === 'aiken' || tipoBCD === 'natural') {
        resultado = decimalAxBits(numeroDecimal, 4);
      } else if (tipoBCD === 'grey') {
        resultado = decimalAxBits(numeroDecimal ^ (numeroDecimal >> 1), 4);
      } else if (tipoBCD === 'exceso3') {
        resultado = decimalAxBits(numeroDecimal + 3, 4);
      }
  
      return resultado;
    }
  
    function decimalAxBits(numeroDecimal, bits) {
      // Convierte un número decimal a una representación binaria de `bits` bits.
      return numeroDecimal.toString(2).padStart(bits, '0');
    }
  
    function convertirDecimalAHexadecimal(numeroDecimal) {
      return numeroDecimal.toString(16).toUpperCase();
    }
  });
  