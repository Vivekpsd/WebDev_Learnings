// Unsplash API
const count = 10;
const apiKey = 'L4C0ljb_HTDBWSiD1M4TzB1lvxkAPfDCn-1ZwbOply8';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get Photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}

// on load
getPhotos();
