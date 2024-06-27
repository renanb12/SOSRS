function removeSymptom(id) {
    var symptomElement = document.getElementById(id);
    symptomElement.style.display = 'none';
}

function submitToDiagnosis() {
    const symptomsContainer = document.getElementById('additional-symptoms');
    const symptomElements = symptomsContainer.getElementsByClassName('symptom');
    const symptoms = Array.from(symptomElements).map(element => element.innerText.replace(' ×', ''));
    const selectedAnimal = document.getElementById('selected-animal').innerText.split(': ')[1];

    const url = `diagnostico.html?symptoms=${symptoms.join(',')}&selectedAnimal=${selectedAnimal}`;
    window.location.href = url;
}

function diagnose(symptoms, animal) {
    const possibleConditions = {
        cobra: {
            'Dor de cabeça': 'Envenenamento por cobra',
            'Febre': 'Infecção bacteriana',
            'Náusea': 'Envenenamento alimentar'
        },
        aranha: {
            'Dor de cabeça': 'Envenenamento por aranha',
            'Febre': 'Infecção viral',
            'Náusea': 'Envenenamento por aranha'
        },
        escorpiao: {
            'Dor de cabeça': 'Envenenamento por escorpião',
            'Febre': 'Infecção bacteriana',
            'Náusea': 'Envenenamento por escorpião'
        },
        lacraia: {
            'Dor de cabeça': 'Reação alérgica',
            'Febre': 'Infecção viral',
            'Náusea': 'Reação alérgica'
        }
    };

    let conditions = [];
    symptoms.forEach(symptom => {
        if (possibleConditions[animal] && possibleConditions[animal][symptom]) {
            conditions.push(possibleConditions[animal][symptom]);
        }
    });

    if (conditions.length === 0) {
        conditions.push('Condição não identificada');
    }

    return conditions.join(', ');
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
        document.getElementById('selected-animal').innerText = `Animal selecionado: ${selectedAnimal}`;
    }
}