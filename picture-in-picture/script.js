const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select media stream, pass to media element and play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (err) {
    console.log(err);
  }
}

button.addEventListener('click', async () => {
  // Disable the button
  button.disabled = true;

  // Start picture in picture
  await videoElement.requestPictureInPicture();

  // Reset the button
  button, (disabled = false);
});

// On load
selectMediaStream();
