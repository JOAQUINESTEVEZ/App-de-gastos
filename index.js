const divTotal = document.querySelector("#total");
const divTotalDividido = document.querySelector("#totalDividido");

function pagosPersonas() {
    //CANTIDAD DE PERSONAS
    let personas = document.getElementById('personas').value;
    let listaPersonas = personas.split(',');
    let cantidadPersonas = listaPersonas.length;

    
    //PAGOS
    let pagos = document.getElementById('pagos').value;
    let listaPagos= pagos.split(',');
    let total = 0
    for (let valor of listaPagos) {
        total = total + Number(valor);
    }
    let totalDividido = total / cantidadPersonas;
    
    
    divTotal.innerHTML = "<h2>" + "Total: " + total + "$" + "</h2>"; 
    divTotalDividido.innerHTML = "<h2>" + "Cada uno debe pagar un total de: " + totalDividido + "$" + "</h2>";

    
}