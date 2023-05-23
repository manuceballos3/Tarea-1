const mesesEnUnAnio = 12

elementoCalculoSalarioMensual.onclick = function() {
    const calcularSalarioAnual = document.querySelector("#salario_anual").value;
    const calcularSalarioMensual = calcularSalarioAnual / mesesEnUnAnio;
    const salarioMensual = document.querySelector("#salario_mensual")
    salarioMensual.value = calcularSalarioMensual;
    return false;
  }
