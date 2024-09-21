
document.addEventListener('dblclick', function(event) {
    event.preventDefault();
}, { passive: false });




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

function pop() {

    var check = document.getElementById('babel');
    var stylecheck = window.getComputedStyle(check);


    
    if (stylecheck.visibility === 'visible') {
        
        var popup = document.querySelector('.popup');
        popup.style.visibility = "visible";

        
    } 
    
    
}



function receive(){

    const viewport = document.querySelector('meta[name="viewport"]');
    viewport.content = 'width=device-width, initial-scale=1';
    
    var popup = document.querySelector('.popup');
    var bubble3 = document.querySelector('.bubble3')
    var bubble1 = document.querySelector('.bubble1')
    

    popup.style.visibility = "hidden";

    var box = document.querySelector('.box')
    box.style.visibility = "visible"
    box.classList.add('animatedBox')

    bubble3.style.visibility = "visible";
    
    bubble1.classList.add('close');
    
    setTimeout(() => {

        var click = document.querySelector('.clickhere');
        click.style.visibility = 'visible';
        
    }, 2000);
    

}

function pushbox() {

    console.log("udah")
    var box = document.querySelector('.box')
    box.classList.add('clickbox')

    box.addEventListener('animationend', function() {
        // Redirect to another page
        window.location.href = 'lock.html'; // Replace 'https://example.com' with the URL of the desired page
    });

}

