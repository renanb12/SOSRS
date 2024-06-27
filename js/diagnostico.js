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
            name: 'Gripe',
            symptoms: ['Febre', 'Tosse', 'Fadiga', 'Dor muscular']
        },
        {
            name: 'Covid-19',
            symptoms: ['Febre', 'Tosse', 'Fadiga', 'Falta de ar', 'Perda de apetite']
        },
        {
            name: 'Dengue',
            symptoms: ['Febre', 'Dor muscular', 'Dor abdominal', 'Fadiga', 'Náusea']
        }
        // Adicione mais doenças e sintomas conforme necessário
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

    if (possibleDiseases.length === 0) {
        return 'Nenhuma doença correspondente encontrada.';
    }

    possibleDiseases.sort((a, b) => b.matchCount - a.matchCount);

    return `Possível diagnóstico: ${possibleDiseases[0].name}`;
}