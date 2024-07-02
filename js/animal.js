// Função para selecionar o animal e enviar de volta para a página de triagem
function selectAnimal(animal) {
    const confirmButton = document.getElementById('confirm-button');
    confirmButton.disabled = false; // Habilita o botão de confirmação

    // Armazena o animal selecionado na sessionStorage
    sessionStorage.setItem('selectedAnimal', animal);

    // Altera a cor de fundo para indicar seleção visualmente (opcional)
    const animalImages = document.getElementsByClassName('animal-images')[0];
    const selectedImage = Array.from(animalImages.children).find(img => img.alt === animal);
    if (selectedImage) {
        selectedImage.classList.add('selected');
        Array.from(animalImages.children).forEach(img => {
            if (img !== selectedImage) {
                img.classList.remove('selected');
            }
        });
    }
}

// Função para confirmar o animal selecionado
function confirmAnimal() {
    const selectedAnimal = sessionStorage.getItem('selectedAnimal');

    if (selectedAnimal) {
        // Redireciona de volta para a página de triagem com o animal selecionado como parâmetro
        window.location.href = `triagem.html?animal=${selectedAnimal}`;
    } else {
        alert('Por favor, selecione um animal.');
    }
}
