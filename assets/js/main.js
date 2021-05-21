

// alert('hello world')
// Newsletter Modal
let newsLetter = document.querySelector('.newsletter')
let closeBtn = document.querySelector('.close-btn')

window.addEventListener('load', function () {
    var newsLetterPopup = function () {
        newsLetter.classList.toggle('active')
    };
    
    setTimeout(newsLetterPopup, 8000);
})

closeBtn.addEventListener('click', function() {
    newsLetter.classList.remove('active')
})


// Copyrights 
let copyrightDate = document.querySelector('#copyright')
copyrightDate.appendChild(document.createTextNode(new Date().getFullYear()))
