window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const symptoms = params.get('symptoms');
    const selectedAnimal = params.get('selectedAnimal');

    if (symptoms) {
        const symptomsArray = symptoms.split(',');
        const symptomsContainer = document.getElementById('symptoms-container');
        symptomsArray.forEach(symptom => {
            const symptomDiv = document.createElement('div');
            symptomDiv.className = 'symptom';
            symptomDiv.innerText = symptom;
            symptomsContainer.appendChild(symptomDiv);
        });
    }

    if (selectedAnimal) {
        document.getElementById('selected-animal').innerText = `Animal selecionado: ${selectedAnimal}`;
    }

    const diagnosis = diagnose(symptoms.split(','));
    document.getElementById('diagnosis').innerText = diagnosis;
}

function diagnose(symptoms) {
    const diseases = [{
            name: 'Leptospirose',
            symptoms: ['Febre', 'Dor de cabeça', 'Sangramento', 'Dor muscular', 'Calafrio', 'Olhos vermelhos', 'Vômitos']
        },
        {
            name: 'Tétano',
            symptoms: ['Febre', 'Contrações musculares dolorosas', 'Falta de ar', 'Pressão alta', 'Sudorese']
        },
        {
            name: 'Dengue',
            symptoms: ['Febre', 'Dor muscular', 'Dor abdominal', 'Fadiga', 'Náusea']
        }
        
    ];

    let possibleDiseases = [];

    diseases.forEach(disease => {
        let matchCount = 0;
        disease.symptoms.forEach(diseaseSymptom => {
            if (symptoms.includes(diseaseSymptom)) {
                matchCount++;
            }
        });

        if (matchCount > 0) {
            possibleDiseases.push({
                name: disease.name,
                matchCount: matchCount
            });
        }
    });

    const symptomKey = symptoms.join(',');

    if (possibleConditions[animal] && possibleConditions[animal][symptomKey]) {
        return possibleConditions[animal][symptomKey];
    } else {
        return "Condição desconhecida. Consulte um médico.";
    }
}

window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const symptoms = params.get('symptoms').split(',');
    const selectedAnimal = params.get('selectedAnimal');

    const diagnosis = diagnose(symptoms, selectedAnimal);
    document.getElementById('diagnosis-result').innerText = `Animal: ${selectedAnimal}\nSintomas: ${symptoms.join(', ')}\n\nDiagnóstico: ${diagnosis}`;
}