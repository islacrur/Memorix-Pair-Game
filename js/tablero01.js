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
let refresh = document.getElementById('refresh');


let mostrarMovimientos = document.getElementById("movimientos");
let mostrarParejas = document.getElementById("parejas");
let mostrarTiempo = document.getElementById("tiempo");
let mostrarResultados = document.getElementById("results");


let numeros = [1,1,2,2,3,3];
 
numeros =  numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);

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


function destapar(id){

    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }

    tarjetasDestapadas++;
    console.log(tarjetasDestapadas)

    if(tarjetasDestapadas == 1){
        
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id];
        tarjeta1.innerHTML = `<img src="src/img/${primerResultado}.png" alt="${primerResultado}">`; 

        
        tarjeta1.disabled = true;
    }else if(tarjetasDestapadas == 2){
       
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id]; 
        tarjeta2.innerHTML = `<img src="src/img/${segundoResultado}.png" alt="${segundoResultado}">`; 

       
        tarjeta2.disabled = true;

        
        movimientos++;
        mostrarMovimientos.innerHTML = `Moves: ${movimientos}`; 

        if(primerResultado == segundoResultado){
            
            tarjetasDestapadas = 0;

            
            parejas++;
            
            mostrarParejas.innerHTML = `Pairs: ${parejas}`;
            


        }else{
            
            setTimeout(()=>{
                tarjeta1.innerHTML = " ";
                tarjeta2.innerHTML = " ";
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            }, 800);
            }
            if(parejas == 3){
                clearInterval(tiempoRegresivoId);
                console.log(parejas);
               
                
                mostrarParejas.textContent = `You found ${parejas} pairs!`;
                mostrarMovimientos.textContent = ` ${movimientos} movements needed`;
                mostrarTiempo.textContent = `Only in ${timer} seconds!`;
                mostrarParejas.style.marginLeft = '5%';      
                mostrarMovimientos.style.margin = '0 20px';   
                mostrarTiempo.style.marginLeft = '15%'; 
                      
            }
}
}


function destaparCartas(event) {
   
    var id = event.target.id;
    
    
    destapar(id);
  }
  card.forEach(function(card) {
    card.addEventListener('click', destaparCartas);
  });

  

refresh.addEventListener('click', (() => {
            location.reload();
            card.classList('roll-in-left');
            }))
