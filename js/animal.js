function selectAnimal(animal) {
    const params = new URLSearchParams(window.location.search);
    const symptoms = params.get('symptoms');
    const url = `triagem.html?symptoms=${symptoms}&selectedAnimal=${animal}`;
    window.location.href = url;
}

function takePhoto() {
    // Implement the camera functionality here
    alert('Funcionalidade de Bater Foto ainda não implementada.');
}