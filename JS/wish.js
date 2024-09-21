document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchmove', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('dblclick', function(event) {
    event.preventDefault();
}, { passive: false });


function home(){

    window.location.href = 'index.html'
}

function download(){

            // Replace 'image1.jpg' and 'image2.jpg' with the paths to your images
            const imageUrl1 = 'imageadjust/1.png';
            

            // Create anchor elements for each image
            const link1 = document.createElement('a');
            

            // Set the href attributes to the image URLs
            link1.href = imageUrl1;


            // Set the download attributes to specify filenames for the downloaded images
            link1.download = 'downloaded_image1.jpg';
            
            // Append the anchor elements to the body
            document.body.appendChild(link1);
            

            // Trigger click events on the anchor elements
            link1.click();
            

            // Remove the anchor elements from the body
            document.body.removeChild(link1);

           
            

}

