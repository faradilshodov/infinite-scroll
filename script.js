// Unsplash API
const count = 10;
const apiKey = 'k-OeQQiLkLJKkoetS1SyPGZ7GHLcPwnb2iApOQK7Pf0'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from  Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        // Catch error here
    }
}

// On Load
getPhotos();