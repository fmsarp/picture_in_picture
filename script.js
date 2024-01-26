const videoEl = document.getElementById('video');
const buttonEl = document.getElementById('button');

// prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoEl.srcObject = mediaStream;
        videoEl.onloadedmetadata = () => {
            videoEl.play();
        }
    } catch (error) {

    }
}

buttonEl.addEventListener('click', async () => {
    // disable button
    buttonEl.disabled = true;
    // start Picture in Picture
    await videoEl.requestPictureInPicture();
    // reset button
    buttonEl.disabled = false;
})

// on load
selectMediaStream();