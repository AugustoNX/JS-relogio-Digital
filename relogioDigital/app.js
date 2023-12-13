
setInterval(function(){
let novaHora = new Date()
let hora = novaHora.getHours();
let min = novaHora.getMinutes();
let seg = novaHora.getSeconds();

min = zero(min)
seg = zero(seg)

document.querySelector("#relogio").textContent = hora + ":" + + min + ":" + seg;
},1000)    

function zero(x){
    if(x < 10){
        x = "0" + x
    } return x 
}

