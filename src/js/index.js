import '../scss/style.scss';

// поиск на  сайте
let searchBtn = document.querySelector('.header .btn-primary--search');
let inputSearch = document.querySelector('.header .header-search__input');
let logo =  document.querySelector('.header .header-logo');

searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  inputSearch.classList.toggle('header-search__input--active');
  logo.classList.toggle('header-logo--active');
})

// меню
let burg = document.querySelector('.section-small-brand__icon-burg');
let closeBtn = document.querySelector('.header-logo__icon-close');
let menu = document.querySelector('.side-bar');
let overflowWrapp = document.querySelector('.overflow-wrapp');

burg.addEventListener('click', (event) => {
  event.preventDefault();
  menu.classList.add('side-bar--active');
  document.body.style.overflow = 'hidden';
  overflowWrapp.classList.add('overflow-wrapp--active');
})

closeBtn.addEventListener('click', (event) => {
  event.preventDefault();
  menu.classList.remove('side-bar--active');
  overflowWrapp.classList.remove('overflow-wrapp--active');
  document.body.style.overflow = 'visible';
})

// мадальное окно обратной связи
let feedbackModalBtn = document.querySelectorAll('.modal-feedback-btn')
let modalCloseBtn = document.querySelectorAll('.modal__btn-close');
let feedbackModal = document.querySelector('.modal-feedback');
//модальное коно заказать звонок
let modalPhoneBtn = document.querySelectorAll('.modal-phone-btn');
let modalPhone = document.querySelector('.modal-phone');

modalPhoneBtn.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    modalPhone.classList.add('modal--active');
    document.body.style.overflow = 'hidden';
    if(!overflowWrapp.classList.contains('overflow-wrapp--active')){
      overflowWrapp.classList.add('overflow-wrapp--active');
    }
    if( menu.classList.contains('side-bar--active')){
      menu.classList.remove('side-bar--active');
    }
  })
})

feedbackModalBtn.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    feedbackModal.classList.add('modal--active');
    document.body.style.overflow = 'hidden';
    if(!overflowWrapp.classList.contains('overflow-wrapp--active')){
      overflowWrapp.classList.add('overflow-wrapp--active');
    }
    if( menu.classList.contains('side-bar--active')){
      menu.classList.remove('side-bar--active');
    }
  })
})

modalCloseBtn.forEach((item) => {
  item.addEventListener('click', (event) => {
    feedbackModal.classList.remove('modal--active');
    modalPhone.classList.remove('modal--active');
    overflowWrapp.classList.remove('overflow-wrapp--active');
    document.body.style.overflow = 'visible';
  })
})

// щелок на туман
overflowWrapp.addEventListener('click', function(){
  this.classList.remove('overflow-wrapp--active');
  menu.classList.remove('side-bar--active');
  feedbackModal.classList.remove('modal--active');
  modalPhone.classList.remove('modal--active');
  document.body.style.overflow = 'visible';
})

// смотреть все
let moreBtn = document.querySelectorAll('.more');

moreBtn.forEach(function(el) {
  el.addEventListener('click', function(event) {
      this.classList.toggle('more--active');
      let hiddenBlock = this.previousElementSibling;
      console.log(hiddenBlock);
      if(hiddenBlock.style.maxHeight){
           hiddenBlock.style.maxHeight = null;
      }else{
          hiddenBlock.style.maxHeight = hiddenBlock.scrollHeight + 'px';
      }
  })
})