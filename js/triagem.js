// Função para selecionar o animal e exibir na página
function selectAnimal(animal) {
    const selectedAnimalElement = document.getElementById('selected-animal');
    selectedAnimalElement.innerText = `Animal selecionado: ${animal}`;
    selectedAnimalElement.dataset.animal = animal; // Armazena o animal selecionado como um atributo de dados
    document.getElementById('confirm-button').disabled = false; // Habilita o botão de confirmação
}

// Função para validar os sintomas e redirecionar para a página de diagnóstico
function submitToDiagnosis() {
    const symptomsContainer = document.getElementById('additional-symptoms');
    const symptomElements = symptomsContainer.getElementsByClassName('symptom');
    const symptoms = Array.from(symptomElements).map(element => element.innerText.replace(' ×', ''));
    const selectedAnimal = document.getElementById('selected-animal').dataset.animal;

    if (symptoms.length === 0) {
        alert('Por favor, adicione pelo menos um sintoma.');
        return;
    }

    const url = `diagnostico.html?symptoms=${symptoms.join(',')}&selectedAnimal=${selectedAnimal}`;
    window.location.href = url;
}

// Função executada ao carregar a página
window.onload = function () {
    // Obtém os parâmetros da URL
    const params = new URLSearchParams(window.location.search);
    const symptoms = params.get('symptoms');
    const selectedAnimal = params.get('selectedAnimal');

    // Preenche os sintomas adicionados dinamicamente
    if (symptoms) {
        const symptomsArray = symptoms.split(',');
        const additionalSymptomsContainer = document.getElementById('additional-symptoms');
        symptomsArray.forEach((symptom, index) => {
            const symptomDiv = document.createElement('div');
            symptomDiv.className = 'symptom';
            symptomDiv.id = `symptom-${index}`;
            symptomDiv.innerHTML = `${symptom} <button onclick="removeSymptom('symptom-${index}')">×</button>`;
            additionalSymptomsContainer.appendChild(symptomDiv);
        });
    }

    // Exibe o animal selecionado, se houver
    if (selectedAnimal) {
        const selectedAnimalElement = document.getElementById('selected-animal');
        selectedAnimalElement.innerText = `Animal selecionado: ${selectedAnimal}`;
        selectedAnimalElement.dataset.animal = selectedAnimal;
        document.getElementById('confirm-button').disabled = false;
    }
}
