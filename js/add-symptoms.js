const selectedSymptoms = [];

function selectSymptom(element, symptom) {
    const index = selectedSymptoms.indexOf(symptom);
    if (index === -1) {
        selectedSymptoms.push(symptom);
        element.classList.add('selected');
    } else {
        selectedSymptoms.splice(index, 1);
        element.classList.remove('selected');
    }
    updateSymptomCount();
    toggleAddMoreMessage();
}

function updateSymptomCount() {
    const symptomCount = selectedSymptoms.length;
    document.getElementById('symptom-count').innerText = `${symptomCount} Sintomas`;
}

function toggleAddMoreMessage() {
    const messageElement = document.getElementById('add-more-message');
    if (selectedSymptoms.length >= 3) {
        messageElement.classList.add('hidden');
    } else {
        messageElement.classList.remove('hidden');
    }
}

function submitSymptoms() {
    const symptomsString = selectedSymptoms.join(',');
    window.location.href = `triagem.html?symptoms=${symptomsString}`;
}

function filterSymptoms() {
    const input = document.getElementById('search-input');
    const filter = input.value.toLowerCase();
    const symptomsContainer = document.getElementById('symptoms-container');
    const symptomOptions = symptomsContainer.getElementsByClassName('symptom-option');

    for (let i = 0; i < symptomOptions.length; i++) {
        const symptom = symptomOptions[i].innerText;
        if (symptom.toLowerCase().indexOf(filter) > -1) {
            symptomOptions[i].style.display = "";
        } else {
            symptomOptions[i].style.display = "none";
        }
    }
}
