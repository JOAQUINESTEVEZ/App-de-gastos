const pagos = [];
const usuarios = [];
const fechas = [];
const efectivos = [];
const listado = document.getElementById('list-group');
const cuadroResultado = document.getElementById('total');
const usuario = document.getElementById('nombre');
const pago = document.getElementById('pago');
const efectivo = document.getElementById('ft');


function agregarGastosAListas() {
    if (usuario.value.length != 0){
        usuarios.push(usuario.value);
        if(pago.value >= 0){
            pagos.push(pago.value);
            fechas.push(new Date());
            efectivos.push(efectivo.checked);
            agregarUltimo();
        }
        else{
            alert('Por favor ingrese un monto positivo');
        }
    }
    else{
        alert('Por favor ingrese un nombre');    
    }
    
}

function agregarUltimo() {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    const ultimo = pagos.length - 1;
    const usuario = usuarios[ultimo];
    const pago = pagos[ultimo];
    const fecha = fechas[ultimo].toLocaleString();
    const ft = efectivos[ultimo] ? 'En efectivo' : 'No usó efectivo';
    li.textContent = `${usuario}: $${pago}, Fecha: ${fecha}, ${ft} `;
    listado.appendChild(li);
    mostrarPagos();
}

function mostrarPagos() {
    const total = sumarValores();
    cuadroResultado.textContent = `El Total es: $${total}.
 A cada uno le toca aportar: $${(total / pagos.length).toFixed(2)}`;
}

function sumarValores() {
    let total = 0;
    for (const gasto of pagos) {
        total += parseFloat(gasto);
    }
    return total;
}













/*const divTotal = document.querySelector("#total");
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
    
    if (total >= 0) {
        divTotal.innerHTML = "<h2>" + "Total: " + total + "$" + "</h2>"; 
        divTotalDividido.innerHTML = "<h2>" + "Cada uno debe pagar un total de: " + totalDividido + "$" + "</h2>";
    } else {
        alert("Por favor ingrese un valor numerico");
    }
    

    
}*/