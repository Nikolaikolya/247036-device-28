// Global Var
let popupWrite = document.querySelector('.popup__write');
let popupMap = document.querySelector('.popup__map');
let popupWriteClose = document.querySelector(".form-write .popup-button");
let popupWriteShow = document.querySelector(".contacts .button");
let popupMapShow = document.querySelector(".contacts__link");
let inputName = document.querySelector('.input-name');
let formWrite = document.querySelector('.form-write');
let poupMapClose = document.querySelector(".popup__map .popup-button");
let buttonCatalog = document.querySelector(".catalog-button");
let catalogMenu = document.querySelector(".catalog-menu");
let searchForm = document.querySelector(".search-form");
let searchInput = document.querySelector(".search-input");
let searchButton = document.querySelector(".search-button");
let buttonSliderIndex = document.querySelectorAll('.slider-control__item button');
let sliderList = document.querySelector('.slider-list');
let sliderListItem = document.querySelectorAll('.slider-list > li');
let servicesButton = document.querySelectorAll('.services-button button');
let servicesSliderItem = document.querySelectorAll('.services-list__item');


// Show slider for block services
for(let i = 0; i <= servicesSliderItem.length -1; i++) {
  toggleClassButton(servicesButton, 'button--current');
  servicesButton[i].addEventListener('click', function(event) {
    servicesButton[i].classList.add('button--current');
    if(servicesButton[i].classList.contains('button--current')){
      toggleSliderServices(servicesSliderItem[i], 'services-list__item--current')
    }
  });
}

function toggleClassButton(array, elementClass) {
  array.forEach(function(element, index){
    element.addEventListener('click', function() {
      if(!element.classList.contains(elementClass)){
        for(let i = 0; i <= array.length - 1; i++) {
          array[i].classList.remove(elementClass);
        }
        element.classList.add(elementClass);
      }
    });
  }); 
}

function toggleSliderServices(element, className) {
  servicesSliderItem.forEach((elem, index) => {
    elem.classList.remove('services-list__item--current');
  });

  element.classList.add(className);
}

// End show slider for block services

// Test
buttonSliderIndex.forEach(function(element, index) {
  element.addEventListener('click', function(event) {
    if(index == 0) {
      sliderListItem[1].classList.add('slider-none');
      sliderListItem[1].classList.remove('slider-list__item');
      sliderListItem[2].classList.add('slider-none');
      sliderListItem[2].classList.remove('slider-list__item');
      sliderListItem[0].classList.toggle('slider-list__item');
      element.classList.toggle('active');
      buttonSliderIndex[1].classList.remove('active');
      buttonSliderIndex[2].classList.remove('active');
    } else if(index == 1) {
      sliderListItem[0].classList.add('slider-none');
      sliderListItem[0].classList.remove('slider-list__item');
      sliderListItem[2].classList.add('slider-none');
      sliderListItem[2].classList.remove('slider-list__item');
      sliderListItem[1].classList.toggle('slider-list__item');
      element.classList.toggle('active');
      buttonSliderIndex[0].classList.remove('active');
      buttonSliderIndex[2].classList.remove('active');
    } else if(index == 2) {
      sliderListItem[1].classList.add('slider-none');
      sliderListItem[1].classList.remove('slider-list__item');
      sliderListItem[0].classList.add('slider-none');
      sliderListItem[0].classList.remove('slider-list__item');
      sliderListItem[2].classList.toggle('slider-list__item');
      element.classList.toggle('active');
      buttonSliderIndex[0].classList.remove('active');
      buttonSliderIndex[1].classList.remove('active');
    }
  })
});

// Popup close and open
popupWriteClose.addEventListener("click", function (event) {
  event.preventDefault();
  popupWrite.style.display = "none";
});

popupWriteShow.addEventListener("click", function (event) {
  event.preventDefault();
  popupWrite.style.display = "block";
  inputName.focus();
});

formWrite.addEventListener('submit', function(event) {
  event.preventDefault();
});

window.addEventListener('keydown', function(event) {
  if(event.keyCode === 27) {
    if(popupWrite.style.display === "block") {
      popupWrite.style.display = "none";
    } else if(popupMap.style.display === "block") {
      popupMap.style.display = "none";
    }
  }
});

popupMapShow.addEventListener("click", function () {
  popupMap.style.display = "block";
});

poupMapClose.addEventListener("click", function () {
  popupMap.style.display = "none";
});
// End popup


// Show header menu
buttonCatalog.addEventListener("mouseover", function (event) {
  if (event.target == buttonCatalog || event.target == catalogMenu) {
    catalogMenu.style.display = "flex";
  }
});

catalogMenu.addEventListener('mouseover', function(event) {
  catalogMenu.style.display = "flex";
});

catalogMenu.addEventListener('mouseout', function(event) {
  catalogMenu.style.display = "none";
});
// END Show header menu

// Show border search panel
searchButton.addEventListener('focus', (event) => {
    searchForm.style.borderColor = '#000000';
    searchButton.style.opacity = '1';
}, true);

searchButton.addEventListener('blur', (event) => {
    searchForm.style.borderColor = 'transparent';
    searchButton.style.opacity = '0';
}, true);

searchForm.addEventListener('focus', (event) => {
    searchForm.style.borderColor = '#000000';
    searchButton.style.opacity = '1';
}, true);

searchForm.addEventListener('blur', (event) => {
    searchForm.style.borderColor = 'transparent';
    searchButton.style.opacity = '0';
}, true);
// END show border search panel