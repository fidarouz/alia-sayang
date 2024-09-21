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

function salah(){


    var width = window.innerWidth;
    var height = window.innerHeight;
    var ipadWidth = 768;
    var ipadHeight = 1024;
    var phoneWidth = 480;
    var phoneHeight = 800;

    if (width === ipadWidth && height === ipadHeight) {
        
        var container = document.querySelector('.container');
    var button = document.querySelector('.buttonname');
    
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;
  
    // Define the maximum distance the button can move from the edges of the container
    var maxDistanceX = 300;
    var maxDistanceY = 300;
  
    // Calculate random positions within the limited range
    var randomX = Math.floor(Math.random() * maxDistanceX);
    var randomY = Math.floor(Math.random() * maxDistanceY);
  
    // Apply the random positions to the button
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';

    var lockswing = document.querySelector('.lock')
    lockswing.style.animationDuration = 0.5+ "s";

    setTimeout(function() {
        var lockswing = document.querySelector('.lock')
        lockswing.style.animationDuration = 4+ "s";
    }, 1000);
    } 
    // Check if the screen size matches the dimensions of a phone
    else if (width <= phoneWidth || height <= phoneHeight) {
        console.log("This is a phone.");

        var container = document.querySelector('.container');
    var button = document.querySelector('.buttonname');
    
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;
  
    // Define the maximum distance the button can move from the edges of the container
    var maxDistanceX = 100;
    var maxDistanceY = 100;
  
    // Calculate random positions within the limited range
    var randomX = Math.floor(Math.random() * maxDistanceX);
    var randomY = Math.floor(Math.random() * maxDistanceY);
  
    // Apply the random positions to the button
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';

    var lockswing = document.querySelector('.lock')
    lockswing.style.animationDuration = 0.5+ "s";

    setTimeout(function() {
        var lockswing = document.querySelector('.lock')
        lockswing.style.animationDuration = 4+ "s";
    }, 1000);
       
    } 

   

}

function clicklock (){


    var box = document.querySelector('.tekateki');
    box.style.visibility = "visible";

}


function betul(){


    var box = document.querySelector('.box');
    var password = document.querySelector('.tekateki');
    var lock = document.querySelector('.lock');
    var box2 = document.querySelector('.box2');
    var penutup = document.querySelector('.penutup');
    var cahaya = document.querySelector('.cahaya');
    var flash = document.querySelector('.flash')


    var width = window.innerWidth;
    var height = window.innerHeight;
    var ipadWidth = 800;
    
    var phoneWidth = 480;
    

    password.classList.add('dissapear')
    lock.classList.add('dissapear')

    setTimeout(function() {
        
        box2.style.visibility = "visible"
        penutup.style.visibility = "visible"
        box.style.visibility = "hidden"
        penutup.classList.add('openbox');
    }, 1000);

    if (width >= ipadWidth) {
        console.log("This is an iPad.");
        setTimeout(function() {
        
            flash.style.visibility = "visible"; // Show the flash image
            flash.classList.add('opacity2');
            
        }, 1000);

        setTimeout(function() {
        
        window.location.href = 'hb.html';
        
        }, 4000);
    } 
    // Check if the screen size matches the dimensions of a phone
    else if(width <= phoneWidth) {
        console.log("This is a phone.");
        setTimeout(function() {
        
            flash.style.visibility = "visible"; // Show the flash image
            flash.classList.add('opacityphone');
            
            
        }, 1000);

        setTimeout(function() {
        
            window.location.href = 'hb.html';
        
        }, 5000); 
    } else{
        console.log('unk')
    }

    
    /* setTimeout(function() {
        
        window.location.href = 'hb.html';
        
    }, 4000); */
    
    /* flash.classList.add('opace2'); */
    

    /* setTimeout(function() {
        
        cahaya.classList.add('opacity');
    }, 1500); */

    

    
}