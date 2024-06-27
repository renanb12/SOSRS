// Obtendo parâmetros da URL
const urlParams = new URLSearchParams(window.location.search);
const animalType = urlParams.get('type');
const animalName = urlParams.get('name');


const animalImages = document.getElementById('animal-images');
let selectedImage = null;

const images = [
    { src: `https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSCz2M3iCuqxO9-CZm5uxWgUarSce-m7bGkp-G_FMiId2Ysy4NyPPQXwEwb4-jEGZLyMkBPBCGYIHIT_VE`, species: `Lacraia` },
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