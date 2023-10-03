//Declaracion de variables
let colones = 0, btc = 0, colonesConversion = 0, btcConversion = 0, stockObject = 0

//Obtener valor de btc en tiempo real
let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcbusd@trade');

ws.onmessage = (event) => {
    stockObject = JSON.parse(event.data);   
}

const frm = document.querySelector("#formulario");

const colonValor = 8.75;

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const moneda = parseFloat(document.querySelector("#moneda").value);

    //Para los btc
    if(moneda > 0){
        btcConversion = moneda / parseFloat(stockObject.p);
        if(btcConversion == NaN){
            btc.textContent = `No se ha podido obtener el valor del BTC. Por favor intente de nuevo en un momento..`;
        }else{
            btc = document.getElementById("btc");
            btc.textContent = `${btcConversion}`; 
        }                   
    }else{
        btc.textContent = 0;
    }

    //Para los colones
    if(moneda > 0){
        colonesConversion = moneda * colonValor;
        colones = document.getElementById("col");
        colones.textContent = `${colonesConversion}`;
    }else{
        colones.textContent = 0;
    }
})


//Funcion para limpiar los datos
function limpiarDatos(){
    if (btc.textContent != '' && colones.textContent != ''){
        btc.textContent = '';
        colones.textContent = '';
    }
}

