const selectedSymptoms = [];

function selectSymptom(element, symptom) {
    if (!selectedSymptoms.includes(symptom)) {
        selectedSymptoms.push(symptom);
        element.classList.add('selected');
    }
    if (selectedSymptoms.length >= 3) {
        document.getElementById('add-more-message').classList.add('hidden');
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