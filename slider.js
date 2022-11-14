const sliderLine = document.querySelector('.slider-line'),
      prevArrow = document.querySelector('.arrow-prev'),
      nextArrow = document.querySelector('.arrow-next'),
      dots = document.querySelectorAll('.dots')
      

let position = 0,
    dotsIndex = 0,
    headLlistIndex = 0
   
//functions
    
    showsHeadLlists (headLlistIndex);

function nexHeadLlist (){
    showsHeadLlists (headLlistIndex +=1 )
} 

function preiousHeadLlist (){
    showsHeadLlists (headLlistIndex -=1 )
}

function currentheadLlist (n) {
    showsHeadLlists(headLlistIndex = n);
}
function showsHeadLlists(n) {

    let headLlists = document.getElementsByClassName('head__link');

    if (n > headLlists.length) {
        headLlistIndex = 1 
        
    }

    if (n < 1)    {
        headLlistIndex = headLlists.length  
        
    }

    for (let headLlist of headLlists ) {
        headLlist.style.activecolor = '#E3B873';
        
    }
    headLlists[headLlistIndex - 1].style.activecolor = '#E3B873';
}/* здесь у меня что то не получилось */

function nextSlide() {
    if (position < (dots.length - 1) * 679) {
        position += 679
        dotsIndex++
    } else {
        position = 0
    }
    sliderLine.style.left = -position + 'px'
    momentSlide(dotsIndex)
}
const prevSlide = () => {
       if (position > 0) {
           position -= 679
           dotsIndex--
    } else {
          position = (dots.length -1) * 679
          dotsIndex = (dots.length -1)
    } 
        sliderLine. style. left = -position + 'px'
        momentSlide(dotsIndex)
}

const momentSlide = () => {
    for (let dots of dots) {
        dots. classList. remove ('click')
    }
    dots[index]. classList. backgroundColor = '#E3B873'
        
}
//eventlistener

nextArrow.addEventListener('click', nextSlide)
prevArrow.addEventListener('click', prevSlide)

dots. forEach( (dots,index) => {
    dots.addEventListener('click', () => {
    position = 679 * index 
    sliderLine. style. left =  -position + 'px'
    dotsIndex = index 
    momentSlide(dotsIndex)
   })
})