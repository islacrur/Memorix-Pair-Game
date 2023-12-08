

///////////////////////////// Inicialización de variables /////////////////////////////
let card = document.querySelectorAll('.card');
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let parejas = 0;
let temporizador = false;
let timer = 0;
let timerInicial = 0;
let tiempoRegresivoId = null;

///////////////////////////// Apuntando a doc. HTML /////////////////////////////
let mostrarMovimientos = document.getElementById("movimientos");
let mostrarParejas = document.getElementById("parejas");
let mostrarTiempo = document.getElementById("tiempo");


///////////////////////////// Crear números aleatorios /////////////////////////////

let numeros = [1,1,2,2,3,3];
 
numeros =  numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);

///////////////////////////// Funciones /////////////////////////////
function contarTiempo(){
    tiempoRegresivoId = setInterval(() => {
        timer++;
        mostrarTiempo.innerHTML = `Time: ${timer} seconds`;
        if(timer == 0){
            clearInterval(tiempoRegresivoId);
            tarjetaBloqueda();
        }
    }, 500);
}

function bloquearTarjetas(){
    for(let i = 0; i<=5; i++){
    let tarjetaBloqueda = document.getElementById(i);
    tarjetaBloqueda.innerHTML =`<img src="src/images/${numeros[i]}.png" alt="${numeros[i]}">`; ;
    tarjetaBloqueda.disabled = true;
    }
}


///////////////////////////// Función principal /////////////////////////////
 function destapar(id){

    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }

    tarjetasDestapadas++;
    console.log(tarjetasDestapadas)

    if(tarjetasDestapadas == 1){
        //Mostrar primer número/////////////////////////////
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id];
        tarjeta1.innerHTML = `<img src="src/img/${primerResultado}.png" alt="${primerResultado}">`; //innerHTML escribe en el HTML 

        //Deshabilitar primer botón /////////////////////////////
        tarjeta1.disabled = true;
    }else if(tarjetasDestapadas == 2){
        //Mostrar segundo número/////////////////////////////
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id]; //Lo que va a mostrar en la tarjeta2
        tarjeta2.innerHTML = `<img src="src/img/${segundoResultado}.png" alt="${segundoResultado}">`; //Lo imprimimos en la tarjeta2

        //Deshabilitar segundo botón/////////////////////////////
        tarjeta2.disabled = true;

        //Incrementar movimientos/////////////////////////////
        movimientos++;
        mostrarMovimientos.innerHTML = `Moves: ${movimientos}`; //Template string para crear este texto

        if(primerResultado == segundoResultado){
            //Poner a cero el contador de tarjetas destapadas/////////////////////////////
            tarjetasDestapadas = 0;

            //Aumentar parejas/////////////////////////////
            parejas++;
            mostrarParejas.innerHTML = `Pairs: ${parejas}`;

            if(parejas == 3){
                clearInterval(tiempoRegresivoId);
                mostrarParejas.textContent = `You found ${parejas} pairs!`;
                mostrarMovimientos.textContent = ` ${movimientos} movements used`;
                mostrarTiempo.textContent = `Only ${timer} seconds spent`;
                mostrarParejas.style.marginLeft = '5%';      
                mostrarMovimientos.style.margin = '0 20px';   
                mostrarTiempo.style.marginLeft = '5%';         
            }

        }else{
            //Mostrar un momento las cartas destapadas y volver a voltear /////////////////////////////
            setTimeout(()=>{
                tarjeta1.innerHTML = " ";
                tarjeta2.innerHTML = " ";
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            }, 800);
            }
}
}

// Para quitar el "onclick del HTML"
function destaparCartas(event) {
    // Obtén el valor del id del botón clickeado
    var id = event.target.id;
    
    // Llama a la función destapar con el id como argumento
    destapar(id);
  }
  card.forEach(function(card) {
    card.addEventListener('click', destaparCartas);
  });

  // Refrescar el juego pinchando en la flechita de refresh
  let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
            location.reload();
})
