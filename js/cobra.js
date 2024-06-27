// Obtendo parâmetros da URL
const urlParams = new URLSearchParams(window.location.search);
const animalType = urlParams.get('type');
const animalName = urlParams.get('name');


const animalImages = document.getElementById('animal-images');
let selectedImage = null;

const images = [
    { src: `https://biofaces.com/img/2419/i/640/640/post/2017/06/1498534833.jpg`, species: `Cobra Cipó Metálica` },
    { src: `https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Brazilian_False_Water_Cobra_%28Hydrodynastes_gigas%29_on_the_road_..._%2828497210736%29.jpg/220px-Brazilian_False_Water_Cobra_%28Hydrodynastes_gigas%29_on_the_road_..._%2828497210736%29.jpg`, species: `Surucucu do Pantanal` },
    { src: `https://www.sonoticias.com.br/wp-content/uploads/2020/01/Snake-Alta-Floresta.jpg`, species: `Salamanta` },
    { src: `https://bichovivo.wordpress.com/wp-content/uploads/2015/11/olferssi-marcio.jpg?w=469&h=353`, species: `Cobra Cipó` },
    { src: `https://biofaces.com/img/1124/i/640/640/post/2017/01/1485733658.jpg`, species: `Cobra da terra` },
    { src: `https://s2-g1.glbimg.com/KC3zMje-v0rLfl4xEUfCFaSx67Q=/0x0:1625x1080/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/X/A/AZ7F6MT8CwyXLjgYZcjw/erythrolamprus-aesculapii-2.jpg`, species: `Coral Verdadeira` },
    { src: `https://static.inaturalist.org/photos/176271458/large.jpg`, species: `Jararaca Pintada` },
    { src: `https://www.ufrgs.br/faunadigitalrs/wp-content/uploads/2020/10/Philodryas-arnaldoi-1024x768.jpg`, species: `Parelheira` },
    { src: `https://www.ufrgs.br/faunadigitalrs/wp-content/uploads/2019/06/Spilotes-pullatus-1024x768.jpg`, species: `Caninana` },
    { src: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyenBDVlh80m5t6j1-FqhSrvgiba1y7Z6i8g&s`, species: `Jararaca Preguiçosa` },
    { src: `https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR2puGfXFhZbVryQ8sbAM8s_OiFTqvkdCb-rKAmS7kNLu9CZvuQ`, species: `Boipeva` },
    { src: `https://1.bp.blogspot.com/-VTV4oZ4z-EQ/VZc_CwS6DdI/AAAAAAAACrU/wtFUKOqDxUE/s1600/Cobra%2Bverde_Philodryas%2Bolfersii%2B%2528Lichtenstein%252C%2B1823%2529_herpetofauna%2Bpotiguar.jpg`, species: `Cobra Verde` },
    { src: `https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQIRBGgflbOZUDwO3fn8lyT0FR6Z-Tz4iHDJsIQ7qi42JSuwCHVwt1rIvFIRtKWiXjgXS4DbZ03ULv-PQE`, species: `Falsa Coral` },
    { src: `https://protecaoanimal.curitiba.pr.gov.br/images/animais-silvestres/vertebrados/anfibios-repteis/40.Tomodon-dorsatus_Morato-n--36.jpg`, species: `Cobra Espada` },
    { src: `https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRIHPFPn0Hj_fIMWVP0Fk9OcScIUpyGgHjK-K-I5EJpN8OD4GvJ`, species: `Jararacuçu` },
    { src: `https://s2-g1.glbimg.com/10pz2zbH254Ga7E_OZzOzNtpLD4=/0x0:4608x3456/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/3/7/wpj18vTNKuBA1ZoNkQzw/img-2099.jpg`, species: `Cruzeira` },
    { src: `https://www.coisasdaroca.com/wp-content/uploads/2020/07/cascavel.jpg`, species: `Cascavel` },
    { src: `https://inaturalist-open-data.s3.amazonaws.com/photos/238944378/large.jpg`, species: `Sucuri Amarela` }
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