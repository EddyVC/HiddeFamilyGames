
const API_URL = 'https://liveadmin.bridgehost.net/api';

const xhr = new XMLHttpRequest();

function sendAgent() {
    // Crear un objeto con los datos que deseas enviar
    const data = {
        idAgent: 19025 // Reemplaza 'TU_ID_AGENT_AQUI' con el valor deseado
    };

    // Convertir el objeto en una cadena JSON
    const json = JSON.stringify(data);

    xhr.addEventListener('load', function() {
        if (xhr.status === 200) {
            // Aquí puedes manejar la respuesta del servidor si es necesario
            const response = JSON.parse(xhr.responseText);
            console.log(response);
        } else {
            console.error('Error en la solicitud al servidor');
        }
    });

    xhr.open('POST', `${API_URL}/Admin/GetAgentHierarchy`);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.send(json);
}

sendAgent();