const mesesEnUnAnio = 12

elementoCalculoSalarioMensual.onclick = function() {
    const calcularSalarioAnual = document.querySelector("#salario_anual").value;
    const calcularSalarioMensual = calcularSalarioAnual / mesesEnUnAnio;
    document.querySelector("#salario_mensual").value = calcularSalarioMensual;
    return false;
  }
