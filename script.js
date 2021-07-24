function cargarTasa() {
    const tasaDolar = 180;    
    const tasaEuro = 200;
    const tasaReal = 18;

   document.getElementById('tasa-peso-dolar').innerHTML = tasaDolar;
   document.getElementById('tasa-peso-euro').innerHTML = tasaEuro;
   document.getElementById('tasa-peso-real').innerHTML = tasaReal;
   document.getElementById('tasa-peso-dolar').value = tasaDolar;
   document.getElementById('tasa-peso-euro').value = tasaEuro;
   document.getElementById('tasa-peso-real').value = tasaReal;
}

function cambioDolarPesos() {

    let dolarIngresado = document.getElementById('dolar').value;
    dolarIngresado = parseInt(dolarIngresado);
    let tasaDolar = document.getElementById('tasa-peso-dolar').value;
    tasaDolar = parseInt(tasaDolar);
    if (isNaN(dolarIngresado)){
        document.getElementById('peso-dolar').value = "";
    }else{
        let total= dolarIngresado*tasaDolar;
        document.getElementById('peso-dolar').value = total.toFixed(2);
    }
   

}
function cambioPesosDolar() {
    
    let pesoIngresado = document.getElementById('peso-dolar').value;
    pesoIngresado = parseInt(pesoIngresado);
    let tasaDolar = document.getElementById('tasa-peso-dolar').value;
    tasaDolar = parseInt(tasaDolar);
    if(isNaN(pesoIngresado)){
        document.getElementById('dolar').value = "";
    }else{
        let total= pesoIngresado/tasaDolar;
        document.getElementById('dolar').value = total.toFixed(2);
    }
    

}

function cambioEuroPesos() {
    let euroAPesos = document.getElementById('euro').value;
    euroAPesos = parseInt(euroAPesos);
    let tasaEuro = document.getElementById('tasa-peso-euro').value;
    tasaEuro = parseInt(tasaEuro);
    if (isNaN(euroAPesos)){
        document.getElementById('peso-euro').value = "";
    }else{
        let totalEuroPeso = euroAPesos * tasaEuro;
        document.getElementById('peso-euro').value = totalEuroPeso.toFixed(2);
    }
   
}

function cambioPesosEuro() {
    let pesosAEuro = document.getElementById('peso-euro').value;
    pesosAEuro = parseInt(pesosAEuro);
    let tasaEuro = document.getElementById('tasa-peso-euro').value;
    tasaEuro = parseInt(tasaEuro);
    if(isNaN(pesosAEuro)){
        document.getElementById('euro').value = "";
    }else{
        let totalPesoEuro = pesosAEuro / tasaEuro;
        document.getElementById('euro').value = totalPesoEuro.toFixed(2);
    }
    
}

function cambioRealPesos (){
    let realAPesos = document.getElementById('real').value;
    realAPesos = parseInt(realAPesos);
    let tasaReal = document.getElementById('tasa-peso-real').value;
    tasaReal = parseInt(tasaReal);
    if (isNaN(realAPesos)){
        document.getElementById('peso-real').value = "";
    }else{
        let totalRealPeso = realAPesos*tasaReal;
        document.getElementById('peso-real').value = totalRealPeso.toFixed(2);
    }
    
}

function cambioPesosReal() {
    let pesosAReal = document.getElementById('peso-real').value;
    pesosAReal = parseInt(pesosAReal);
    let tasaReal = document.getElementById('tasa-peso-real').value;
    tasaReal = parseInt(tasaReal);
    if (isNaN(pesosAReal)){
        document.getElementById('real').value = "";
    }else{
        let totalPesosReal = pesosAReal / tasaReal;
        document.getElementById('real').value = totalPesosReal.toFixed(2);
    }
   
}