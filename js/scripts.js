function abrirPestana(tabId, botonActivo) {
    const contenidos = document.querySelectorAll('.tab-content');
    contenidos.forEach(div => div.style.display = 'none');

    const botones = document.querySelectorAll('nav button');
    botones.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabId).style.display = 'block';
    botonActivo.classList.add('active');
}
document.addEventListener('DOMContentLoaded', () => {
    abrirPestana('tabSalud', document.getElementById('btnSalud'));
});


// salud
function salud_pa_clasificar() {
    const sistolica = parseInt(document.getElementById('sistolica').value);
    const diastolica = parseInt(document.getElementById('diastolica').value);
    const resultadoDiv = document.getElementById('salud_res_pa');

    if (isNaN(sistolica) || isNaN(diastolica)) {
        resultadoDiv.innerHTML = "Ingrese valores válidos.";
        resultadoDiv.className = 'resultado';
        return;
    }

    let clasificacion = "";
    let claseColor = ""; 

    if (sistolica < 120 && diastolica < 80) {
        clasificacion = "normal";
        claseColor = "verde";
    } else if (sistolica >= 140 || diastolica >= 90) {
        clasificacion = "hipertension (HTA) grado 2";
        claseColor = "rojo";
    } else {
        clasificacion = "elevada o HTA grado 1";
        claseColor = "alerta";
    }

    resultadoDiv.innerHTML = `Clasificacion: ${clasificacion}`;
    resultadoDiv.className = `resultado ${claseColor}`; 
}


// astronomia
function astro_brillo_clasificar() {
    const magnitud = parseFloat(document.getElementById('magnitud').value);
    const resultadoDiv = document.getElementById('astro_res_brillo');

    if (isNaN(magnitud)) {
        resultadoDiv.innerHTML = "Ingrese un valor de magnitud.";
        return;
    }

    let clasificacion = "";
    let descripcion = ""; 

    if (magnitud < 0) {
        clasificacion = "Extremadamente brillante";
        descripcion= "es visible en el cielo ";
    } else if (magnitud >= 0 && magnitud < 2) {
        clasificacion = "muy brillante";
        descripcion = " visible ";
    } else if (magnitud >= 2 && magnitud < 6) {
        clasificacion = "brillante a visible";
        descripcion= "a simple vista";
    } else {
        clasificacion = "debil o no visible";
        descripcion = "solo visible con telescopios";
    }

    resultadoDiv.innerHTML = `
        <p>Brillo: ${clasificacion}</p>
        <p>Visibilidad: ${descripcion}</p>
    `;
    resultadoDiv.className = 'resultado';
}


// ambiente
function ambiente_aqi_clasificar() {
    const aqi = parseInt(document.getElementById('aqi').value);
    const resultadoDiv = document.getElementById('ambiente_res_aqi');

    if (isNaN(aqi) || aqi < 0) {
        resultadoDiv.innerHTML = "Ingrese un valor AQI válido (0 o más).";
        return;
    }

    let clasificacion = "";
    let claseColor = ""; 

    if (aqi <= 50) {
        clasificacion = "buena";
        claseColor = "verde";
    } else if (aqi <= 100) {
        clasificacion = "moderada";
        claseColor = "alerta";
    } else if (aqi <= 150) {
        clasificacion = "dañina a Grupos Sensibles";
        claseColor = "rojo";
    } else {
        clasificacion = "dañina o peligrosa";
        claseColor = "rojo"; 
    }

    resultadoDiv.innerHTML = `calidad del Aire (AQI ${aqi}): ${clasificacion}`;
    resultadoDiv.className = `resultado ${claseColor}`; 
}