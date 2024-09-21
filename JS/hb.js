
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

var surat = document.getElementById('letters');
surat.addEventListener('click', function(event){

    letters();
    console.log("here")
});


function letters(){

    surat.classList.add('scale');
    setTimeout(() => {
        
        var cont = document.querySelector('.container');
        cont.style.fill = 'white';
        cont.classList.add('fade');

        window.location.href = 'wish.html'
    }, 2000);

}


const canvas = document.querySelector('.canva');
const jsConfetti = new JSConfetti({ canvas });

function addConfetti(){

        // Initial confetti on load
        jsConfetti.addConfetti({
            emojis: ['❤️'],
            emojiSize: 100,
            confettiNumber: 30,
        });
}

document.addEventListener('DOMContentLoaded', function() {

    setTimeout(() => {
        addConfetti();

        setInterval(addConfetti, 1000);
    }, 1500);

});


