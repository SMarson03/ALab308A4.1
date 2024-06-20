// import { fetchBreeds } from "./api.js";



// async function dogImages (){
//     let doggies = document.getElementsByClassName("dogImage");
//     // doggies.src = data[0].url
//     const data = await fetchBreeds()

//     const newArr = await Promise.all(() =>{
//         data[0].map(async(dogElement)=>({
//             const response = await dogElement})
//     })
// }

// import { fetchBreeds } from "./main.js";

// // Function to fetch dog images from the API
// async function fetchDogImages() {
//     try {
//         const response = await fetch('https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10');
//         if (!response.ok) {
//             throw new Error('Failed to fetch images');
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return [];
//     }
// }

// // Function to render images and information
// async function renderDogImages() {
//     const imageGallery = document.getElementById('imageGallery');
//     imageGallery.innerHTML = ''; // Clear previous content

//     const images = await fetchDogImages();
//     images.forEach(image => {
//         const imageItem = document.createElement('div');
//         imageItem.classList.add('image-item');

//         const img = document.createElement('img');
//         img.src = image.url;
//         img.alt = 'Dog Image';
//         img.addEventListener('click', () => {
//             alert(`Breed: ${image.breeds[0].name}\nDescription: ${image.breeds[0].description}`);
//         });

//         imageItem.appendChild(img);
//         imageGallery.appendChild(imageItem);
//     });
// }

// // Call renderDogImages when the page loads
// window.onload = renderDogImages;