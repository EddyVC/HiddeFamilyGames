const agents = {
    mexico: "Agent 1",
    usa: "Agent 2",
    canada: "Agent 3",
    brasil: "Agent 4"
};

const players = {
    toyota: "Player 1",
    honda: "Player 2",
    ford: "Player 3",
    bmw: "Player 4"
};

const sports = {
    pino: "Sport 1",
    roble: "Sport 2",
    maple: "Sport 3",
    ceibo: "Sport 4",
};

const games = {
    pino: "Game 1",
    roble: "Game 2",
    maple: "Game 3",
    ceibo: "Game 4"
};

function createCheckboxes(container, items) {
    for (const key in items) {
        if (items.hasOwnProperty(key)) {
            const item = items[key];
            const checkboxDiv = document.createElement("div");
            checkboxDiv.className = "checkbox-item";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = key;
            checkbox.id = key;

            const label = document.createElement("label");
            label.htmlFor = key;
            label.appendChild(document.createTextNode(item));

            checkboxDiv.appendChild(checkbox);
            checkboxDiv.appendChild(label);

            container.appendChild(checkboxDiv);
        }
    }
}

createCheckboxes(document.getElementById("agents"), agents);
createCheckboxes(document.getElementById("players"), players);
createCheckboxes(document.getElementById("sports"), sports);
createCheckboxes(document.getElementById("games"), games);


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