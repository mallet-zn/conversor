document.getElementById("convert").onclick = tempConvert;
document.getElementById("clear").onclick = clearForm;

function tempConvert() {
    var fahreinheit = document.getElementById("fahreinheit").value;
    var celcius = document.getElementById("celcius").value;

    if (isNaN(fahreinheit) || isNaN(celcius)){
        alert("Digite um valor valido!");
        return;
    } else if (fahreinheit === "") {
        fahreinheit = parseFloat(celcius) * 1.8 + 32;
    } else if (celcius === "") {
        celcius = (parseFloat(fahreinheit) - 32) / 1.8;
    }
    document.getElementById("fahreinheit").value = parseFloat(fahreinheit).toFixed(2);
    
    document.getElementById("celcius").value = parseFloat(celcius).toFixed(2);
}

function clearForm() {
  document.getElementById("fahreinheit").value = "";
  document.getElementById("celcius").value = "";
}
