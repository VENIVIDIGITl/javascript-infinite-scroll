// Unsplash API
const count = 10;
const API_KEY = 'YOUR_API_KEY';
const API_URL = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=${count}`;


// Get Photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Catch Error Here
  }
}


// On Load
getPhotos();
