let votosWeb=0
let votosJS=0
let votosBD=0

function votar(opcion){
    if (opcion === 'web'){
    votosWeb++;
    document.getElementById('votos-web').textContent = votosWeb;
    alert("¡Gracias por tu voto!");
    } else if (opcion === 'js') {
        votosJS++;
        document.getElementById('votos-js').textContent = votosJS;
        alert("¡Gracias por tu voto!");
    } else if (opcion === 'bd') {
        votosBD++;
        document.getElementById('votos-bd').textContent = votosBD;
        alert("¡Gracias por tu voto!");
    }

    totalVotos++;
    document.getElementById('total-votos').textContent = totalVotos;


    if (totalVotos === 5){
        console.log("Total acumulado de votos: " + totalVotos);
    }
}