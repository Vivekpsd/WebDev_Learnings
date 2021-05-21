const imageContainer = document.getElementById('img-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'L4C0ljb_HTDBWSiD1M4TzB1lvxkAPfDCn-1ZwbOply8';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create Elements for links and photos, add to dom

// Helper function for setAttribute in DOM

function setAttributes(element, atttibutes) {
  for (const key in atttibutes) {
    element.setAttribute(key, atttibutes[key]);
  }
}

function displayPhotos() {
  // Run function for each object in photos Array
  photosArray.forEach((photo) => {
    // Create anchor element to link to splash
    const item = document.createElement('a');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });

    // Create img for photo
    const img = document.createElement('img');
    // img.setAttribute('src', photo.urls.regular);
    // img.setAttribute('alt', photo.alt_description);
    // img.setAttribute('title', photo.alt_description);
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    // Put image inside anchor and put both inside img-container

    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get Photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (err) {
    console.log(err.message);
  }
}

// on load
getPhotos();
