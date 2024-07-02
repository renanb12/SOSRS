window.onload = function () {
    // Função para obter parâmetros da URL
    const params = new URLSearchParams(window.location.search);
    // Obtém os sintomas da URL
    const symptoms = params.get('symptoms');
    // Obtém o animal selecionado da URL
    const selectedAnimal = params.get('selectedAnimal');

    if (selectedAnimal) {
        document.getElementById('selected-animal').innerText = `Animal selecionado: ${selectedAnimal}`;
    }
    // Se há sintomas na URL
    if (symptoms) {
        // Converte a string de sintomas em um array
        const symptomsArray = symptoms.split(',');
        // Seleciona o container de sintomas
        const symptomsContainer = document.getElementById('symptoms-container');
        // Para cada sintoma no array, cria um elemento div
        symptomsArray.forEach(symptom => {
            const symptomDiv = document.createElement('div');
            symptomDiv.className = 'symptom';
            symptomDiv.innerText = symptom;
            symptomsContainer.appendChild(symptomDiv);
        });
    }

    // Se há um animal selecionado na URL
    if (selectedAnimal) {
        document.getElementById('selected-animal').innerText = `Animal selecionado: ${selectedAnimal}`;
    }

    // Realiza o diagnóstico com base nos sintomas recebidos
    const diagnosis = diagnose(symptoms.split(','));
    // Exibe o diagnóstico na página
    document.getElementById('diagnosis').innerText = diagnosis;
}

// Função para realizar o diagnóstico com base nos sintomas recebidos
function diagnose(symptoms) {
    const diseases = [
        {
            name: 'Leptospirose',
            symptoms: ['Febre', 'Dor de cabeça', 'Sangramento', 'Dor muscular', 'Calafrio', 'Olhos vermelhos', 'Vômitos']
        },
        {
            name: 'Tétano',
            symptoms: ['Febre', 'Contrações musculares dolorosas', 'Falta de ar', 'Pressão alta', 'Sudorese']
        },
        {
            name: 'Diarreia aguda',
            symptoms: ['Febre', 'Contrações musculares dolorosas', 'Falta de ar', 'Pressão alta', 'Sudorese']
        },
        {
            name: 'Hepatite A',
            symptoms: ['Febre', 'Contrações musculares dolorosas', 'Falta de ar', 'Pressão alta', 'Sudorese']
        },
        {
            name: 'Dengue',
            symptoms: ['Febre', 'Dor muscular', 'Dor abdominal', 'Fadiga', 'Náusea']
        }
    ];

    // Array para armazenar as doenças possíveis com contagem de correspondências
    let possibleDiseases = [];

    // Para cada doença, conta quantos sintomas correspondem
    diseases.forEach(disease => {
        let matchCount = 0;
        disease.symptoms.forEach(diseaseSymptom => {
            if (symptoms.includes(diseaseSymptom)) {
                matchCount++;
            }
        });

        // Se houver correspondências, adiciona à lista de possíveis doenças
        if (matchCount > 0) {
            possibleDiseases.push({
                name: disease.name,
                matchCount: matchCount
            });
        }
    });

    // Se nenhuma doença correspondente for encontrada, retorna mensagem padrão
    if (possibleDiseases.length === 0) {
        return 'Nenhuma doença correspondente encontrada.';
    }

    // Ordena as possíveis doenças pelo número de correspondências em ordem decrescente
    possibleDiseases.sort((a, b) => b.matchCount - a.matchCount);

    // Retorna o diagnóstico com a doença mais provável
    return `Possível diagnóstico: ${possibleDiseases[0].name}`;
}