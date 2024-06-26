function removeSymptom(id) {
    var symptomElement = document.getElementById(id);
    symptomElement.style.display = 'none';
}

window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const symptoms = params.get('symptoms');
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
}