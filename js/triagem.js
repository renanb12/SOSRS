function removeSymptom(id) {
    var symptomElement = document.getElementById(id);
    symptomElement.parentElement.removeChild(symptomElement);
}

function submitToDiagnosis() {
    const symptomsContainer = document.getElementById('additional-symptoms');
    const symptomElements = symptomsContainer.getElementsByClassName('symptom');
    const symptoms = Array.from(symptomElements).map(element => element.innerText.replace(' ×', ''));
    const selectedAnimalElement = document.getElementById('selected-animal');

    if (symptoms.length === 0) {
        alert('Por favor, adicione pelo menos um sintoma.');
        return;
    }

    const selectedAnimal = selectedAnimalElement.innerText.split(': ')[1];

    const url = `diagnostico.html?symptoms=${symptoms.join(',')}&selectedAnimal=${selectedAnimal}`;
    window.location.href = url;
}

window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const symptoms = params.get('symptoms');
    const selectedAnimal = params.get('selectedAnimal');

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

    if (selectedAnimal) {
        const selectedAnimalElement = document.createElement('div');
        selectedAnimalElement.id = 'selected-animal';
        selectedAnimalElement.innerText = `Animal selecionado: ${selectedAnimal}`;
        document.querySelector('.content').insertBefore(selectedAnimalElement, document.querySelector('.info'));
    }
}