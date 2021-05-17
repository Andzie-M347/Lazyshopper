// Newsletter Modal
let newsLetter = document.querySelector('.news-letter')
let closeBtn = document.querySelector('.close-btn')

window.addEventListener('load', function () {
    var newsLetterPopup = function () {
        newsLetter.classList.toggle('active')
    };
    
    setTimeout(newsLetterPopup, 3000);
})

closeBtn.addEventListener('click', function() {
    newsLetter.classList.remove('active')
})


