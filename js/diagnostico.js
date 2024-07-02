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
    const diseases = [{
            name: 'Leptospirose',
            symptoms: [
                'Febre alta',
                'Dor de cabeça',
                'Sangramentos',
                'Dor muscular',
                'Calafrios',
                'Olhos vermelhos',
                'Vômitos',
                'Dor na panturrilha e lombar'
            ]
        },
        {
            name: 'Tétano',
            symptoms: [
                'Contrações musculares dolorosas',
                'Dificuldade para respirar',
                'Febre',
                'Pressão alta',
                'Sudorese'
            ]
        },
        {
            name: 'Diarreia Aguda',
            symptoms: [
                'Sangramentos nas fezes',
                'Dores abdominais',
                'Muco nas fezes'
            ]
        },
        {
            name: 'Hepatite A',
            symptoms: [
                'Fadiga',
                'Icterícia',
                'Urina escura',
                'Fezes claras',
                'Perda de apetite'
            ]
        },
        {
            name: 'Dengue',
            symptoms: [
                'Febre alta',
                'Dores musculares',
                'Erupções cutâneas',
                'Dores nas articulações',
                'Hemorragia intensa (casos graves)',
                'Dificuldade para respirar (casos graves)',
                'Edema (inchaço)',
                'Rubor (vermelhidão)',
                'Febre',
                'Dor de cabeça'
            ]
        },
        {
            name: 'Animais Peçonhentos',
            symptoms: [
                'Lugares úmidos',
                'Locais escuros',
                'Áreas com entulhos ou destroços'
            ]
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