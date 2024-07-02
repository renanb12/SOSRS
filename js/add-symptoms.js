// Array para armazenar sintomas selecionados
const selectedSymptoms = [];

// Função para selecionar/deselecionar um sintoma
function selectSymptom(element, symptom) {
    const index = selectedSymptoms.indexOf(symptom);
    if (index === -1) {
        selectedSymptoms.push(symptom); // Adiciona sintoma ao array
        element.classList.add('selected'); // Aplica classe de selecionado ao elemento
    } else {
        selectedSymptoms.splice(index, 1); // Remove sintoma do array
        element.classList.remove('selected'); // Remove classe de selecionado do elemento
    }
    updateSymptomCount(); // Atualiza contador de sintomas selecionados
    toggleAddMoreMessage(); // Alterna mensagem de adicionar mais sintomas
}

// Função para atualizar contador de sintomas
function updateSymptomCount() {
    const symptomCount = selectedSymptoms.length;
    document.getElementById('symptom-count').innerText = `${symptomCount} Sintomas`;
}

// Função para alternar mensagem de adicionar mais sintomas
function toggleAddMoreMessage() {
    const messageElement = document.getElementById('add-more-message');
    if (selectedSymptoms.length >= 3) {
        messageElement.classList.add('hidden'); // Esconde mensagem se há mais de 3 sintomas
    } else {
        messageElement.classList.remove('hidden'); // Mostra mensagem se há menos de 3 sintomas
    }
}

// Função para submeter sintomas selecionados
function submitSymptoms() {
    const symptomsString = selectedSymptoms.join(','); // Converte array para string separada por vírgulas
    window.location.href = `triagem.html?symptoms=${symptomsString}`; // Redireciona para página de triagem com sintomas selecionados na URL
}

// Função para filtrar sintomas baseado na entrada de texto
function filterSymptoms() {
    const input = document.getElementById('search-input'); // Obtém elemento de entrada
    const filter = input.value.toLowerCase(); // Obtém texto digitado, convertido para minúsculo
    const symptomsContainer = document.getElementById('symptoms-container'); // Obtém container de sintomas
    const symptomOptions = symptomsContainer.getElementsByClassName('symptom-option'); // Obtém opções de sintomas

    // Itera sobre opções de sintomas para mostrar/esconder baseado no filtro
    for (let i = 0; i < symptomOptions.length; i++) {
        const symptom = symptomOptions[i].innerText; // Obtém texto do sintoma
        if (symptom.toLowerCase().indexOf(filter) > -1) {
            symptomOptions[i].style.display = ""; // Mostra sintoma se corresponder ao filtro
        } else {
            symptomOptions[i].style.display = "none"; // Esconde sintoma se não corresponder ao filtro
        }
    }
}
