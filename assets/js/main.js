// alert('hello world')
// Newsletter Modal
// let newsLetter = document.querySelector('.newsletter')
// let closeBtn = document.querySelector('.close-btn')

// window.addEventListener('load', function () {
//     var newsLetterPopup = function () {
//         newsLetter.classList.toggle('active')
//     };

//     setTimeout(newsLetterPopup, 8000);
// })

// closeBtn.addEventListener('click', function() {
//     newsLetter.classList.remove('active')
// })


// Copyrights 
let copyrightDate = document.querySelector('#copyright')
copyrightDate.appendChild(document.createTextNode(new Date().getFullYear()))


var slider = tns({
    "responsive": {
        "1080": {
            "items": 4,
            "controls": true,
        
        },
        "500": {
            "items": 2
        }
    },

    container: '.my-slider',
    slideBy: 'page',
    controls: true,
    mouseDrag: true,
    swipeAngle: false,
    gutter: 10

});


// 

let prev = document.body.querySelector('[data-controls=prev]')
prev.innerHTML = `&larr;`

let next = document.body.querySelector('[data-controls=next]')
next.innerHTML = `&rarr;`

// Sticky Header 
window.addEventListener('scroll', function() {
    var header = document.querySelector('.site-header')
    header.classList.toggle('fixed', window.scrollY > 0)
})