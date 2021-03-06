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




let prev = document.body.querySelector('[data-controls=prev]')
prev.innerHTML = `&larr;`

let next = document.body.querySelector('[data-controls=next]')
next.innerHTML = `&rarr;`

// Sticky Header 
window.addEventListener('scroll', function () {
  var header = document.querySelector('.site-header')
  header.classList.toggle('fixed', window.scrollY > 0)
})

// Scroll to top
document.addEventListener("scroll", handleScroll);
var scrollToTopBtn = document.querySelector(".scroll-top");

function handleScroll() {
  var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var GOLDEN_RATIO = 0.5;

  if ((document.documentElement.scrollTop / scrollableHeight) > GOLDEN_RATIO) {
    if (!scrollToTopBtn.classList.contains("showScrollBtn"))
      scrollToTopBtn.classList.add("showScrollBtn")
  } else {
    if (scrollToTopBtn.classList.contains("showScrollBtn"))
      scrollToTopBtn.classList.remove("showScrollBtn")
  }
}

scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// Dropdown menu
(function () {
  var elements = document.querySelectorAll(".dropdown-button");

  function openDropdown(event) {
    event.target.parentNode.classList.add("open");
  }

  function resetDropdowns() {
    var element = document.querySelector(".dropdown-button.open");
    if (element) {
      element.classList.remove("open");
    }
  }

  function documentHandler() {
    resetDropdowns();
    document.removeEventListener('click', documentHandler, false);
  };

  if (elements.length > 0) {
    elements.forEach(el => {
      el.addEventListener('click', function (e) {
        var isActive = e.target.parentNode.classList.contains("open");
        resetDropdowns();
        if (isActive) {
          return;
        }
        e.stopPropagation();
        e.preventDefault();
        openDropdown(e);
        document.addEventListener('click', documentHandler, false);
      }, false);
    })
  }

})()


// Increament Button 

let decrement = document.querySelector('#decrease');
let increment = document.querySelector('#increase');

increment.addEventListener('click', function () {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value == 10 ? value = 9 : '';
  value++;
  document.getElementById('number').value = value;
});


decrement.addEventListener('click', function () {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
});



// Product Slider

var secondarySlider = new Splide('#product-carousel').mount();
var primarySlider = new Splide('#product-display');

primarySlider.sync(secondarySlider).mount();


document.addEventListener('DOMContentLoaded', function () {
  var secondarySlider = new Splide('#product-carousel', {
    perPage: 2,
    fixedWidth: 100,
    height: 60,
    height: '10rem',
    cover: true,
    pagination: false,
    isNavigation: true,
    // focus: 'center',
    breakpoints: {
      fixedWidth: 66,
      height: 40,
    }
  }).mount();

  var primarySlider = new Splide('#product-display', {
    fixedWidth: 350,
    height: 350,
    type: 'fade',
    heightRatio: 0.5,
    pagination: false,
    arrows: false,
    cover: true,
  }); // do not call mount() here.

  primarySlider.sync(secondarySlider).mount();


});


// Products Tab
function tabify(element) {
  const header = element.querySelector('.lzs-tab__header');
  const content = element.querySelector('.lzs-tab__content');
  const tab_headers = [...header.children];
  const tab_contents = [...content.children];
  tab_contents.forEach(x => x.style.display = 'none');
  let current_tab_index = -1;

  function setTab(index) {
    if (current_tab_index > -1) {
      tab_headers[current_tab_index].classList.add('tab-header');

      tab_contents[current_tab_index].style.display = 'none';

    }


    // Tab header

    tab_headers[index].classList.add('tab-header__inverse');
    tab_headers[index].classList.remove('tab-header');


    // Tab content
    tab_contents[index].style.display = 'flex';
    tab_contents[index].classList.add('tab-content');

    current_tab_index = index;
    
  }

  default_tab_index = tab_headers.findIndex(x => {
    return [...x.classList].indexOf('active-tab') > -1;
  });

  default_tab_index = default_tab_index === -1 ? 0 : default_tab_index;
  setTab(default_tab_index);
  tab_headers.forEach((x, i) => x.onclick = event => setTab(i));
}

// this is where the magic happens!
[...document.querySelectorAll('.lzs-tab')]
.forEach(x => tabify(x));