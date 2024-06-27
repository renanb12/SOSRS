// Obtendo parâmetros da URL
const urlParams = new URLSearchParams(window.location.search);
const animalType = urlParams.get('type');
const animalName = urlParams.get('name');


const animalImages = document.getElementById('animal-images');
let selectedImage = null;

const images = [
    { src: `https://conteudo.imguol.com.br/c/noticias/de/2024/03/18/aranha-armadeira-e-tambem-conhecida-como-aranha-da-bananeira-1710780494266_v2_4x3.png`, species: `Armadeira` },
    { src: `https://s1.static.brasilescola.uol.com.br/be/2023/03/vista-aproximada-de-uma-aranha-caranguejeira-sobre-uma-pedra.jpg`, species: `Caranguejeira` },
    { src: `https://cdn.hipercultura.com/imagens/hiper-aranha-1-0-cke.jpg`, species: `Aranha De Jardim` },
    { src: `https://static.mundoeducacao.uol.com.br/mundoeducacao/2023/05/1-aranha-marrom.jpg`, species: `Aranha Marrom` }
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