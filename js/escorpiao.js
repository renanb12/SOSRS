// Obtendo parâmetros da URL
const urlParams = new URLSearchParams(window.location.search);
const animalType = urlParams.get('type');
const animalName = urlParams.get('name');


const animalImages = document.getElementById('animal-images');
let selectedImage = null;

const images = [
    { src: `https://saude.rs.gov.br/upload/recortes/carga20181128/20092821_89356_GDO.jpg`, species: `Escorpião Amarelo` },
    { src: `https://butantan.gov.br/assets/page-image/Obscurus_750X500-ca09c953e743b085.jpg`, species: `Escorpião Preto` },
    { src: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3M9C-t9ZHp08No2Z1rJ6pfG1nZd4wr2IovA&s`, species: `Escorpião Manchado` },
];

images.forEach(imgData => {
    const img = document.createElement('img');
    img.src = imgData.src;
    img.alt = imgData.species;
    img.classList.add('animal-image');
    img.onclick = () => selectImage(img, imgData.species);
    animalImages.appendChild(img);
});

function selectImage(img, species) {
    if (selectedImage) {
        selectedImage.classList.remove('selected');
    }
    selectedImage = img;
    selectedImage.classList.add('selected');
    document.getElementById('confirm-button').disabled = false;
    selectedImage.dataset.species = species;
}

function confirmAnimal() {
    if (selectedImage) {
        const selectedSpecies = selectedImage.dataset.species;
        window.location.href = `index.html?selectedAnimal=${encodeURIComponent(selectedSpecies)}`;
    }
}