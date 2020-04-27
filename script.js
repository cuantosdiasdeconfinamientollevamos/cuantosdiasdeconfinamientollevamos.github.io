document.addEventListener('DOMContentLoaded', init);
function init(){
    console.log("¿Cuántos días llevamos de confinamiento?");
    //Real Decreto 463/2020, de 14 de marzo, por el que se declara el estado de alarma 
    //para la gestión de la situación de crisis sanitaria ocasionada por el COVID-19.
    const startDate = '2020-03-14';
    const endDate = Date.now();
    const timeDiff  = Math.abs((new Date(startDate)) - (new Date(endDate)));
    const days      = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    console.log(days);
    var h1DiasConfinamiento = document.createElement('h1');
    h1DiasConfinamiento.setAttribute("id", "numeroDiascConfinados");
    h1DiasConfinamiento.innerHTML = days;
    document.body.appendChild(h1DiasConfinamiento);
}