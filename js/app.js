/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const myNav = document.getElementsByTagName('nav');
const myNavUl = document.getElementById('navbar__list');
const mySections = document.querySelectorAll('section');
const mySectionsTitle = document.querySelectorAll('h2');
const myAnc = document.getElementsByClassName('linke');
const myBtn = document.getElementById('backTop')

/**
 * End Global Variables

 * Begin Main Functions
 * 
*/

// build the nav
    for (let i = 0; i < mySections.length; i++) {

        const myNavA = document.createElement('a')
    
        myNavA.classList.add('linke')
    
        myNavA.setAttribute('href', "#" + mySections[i].id)
    
       // myNavA.setAttribute('onclick', "activeSection()")
    
        const myNavItem = document.createElement('li')
        
        myNavItem.appendChild(myNavA);
        
        myNavA.textContent = mySectionsTitle[i].innerText;
    
        myNavUl.appendChild(myNavItem);
    }


// Add class 'active' to section when near top of viewport
let sectionCords = [];

for (let i = 0; i < mySections.length; i++) {
    let sectionStart = mySections[i].offsetTop;
    let sectionEnd = sectionStart + mySections[i].offsetHeight;
    let sectionCord = {
        "start": sectionStart,
        "end": sectionEnd
    }
    sectionCords.push(sectionCord);
}

window.addEventListener('scroll', event=>{
    let pageY = window.pageYOffset;
    for(let i = 0; i < sectionCords.length; i++) {
        let sectionCord = sectionCords[i];
        if(pageY >= sectionCord.start && pageY < sectionCord.end) {
            //loop through mySections array and remove class from elements
            for(let j = 0; j < mySections.length; j++) {
                mySections[j].classList.remove('your-active-class');
                myAnc[j].classList.remove('active-linke')
            }
            //then add active class to element mysections[i]
            mySections[i].classList.add('your-active-class');
            myAnc[i].classList.add('active-linke')
            break;
        }
    }

});

// scroll to top button
myBtn.onclick = function() {

    window.scrollTo(0, 0)
    
} 
    
window.addEventListener('scroll', function () { // show and hide scroll top button
    if ( window.pageYOffset > mySections[0].offsetHeight ) {
        myBtn.style.display = 'block';
    } else {
        myBtn.style.display = 'none'
    }
})



// Scroll to anchor ID
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 900,
    easing: 'easeInOutCubic',
});

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


