$(document).ready(function () {

  // modal select box
  var x, i, j, l, ll, selElmnt, a, b, c;
  /*look for any elements with the class "custom-select":*/
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /*for each option in the original select element,
      create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      if (this.childNodes.length > 0){
        this.parentElement.classList.add("select-non-empty");
      }else {
        this.parentElement.classList.remove("select-non-empty");
      }
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }
  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
  then close all select boxes:*/
  document.addEventListener("click", closeAllSelect);

  // modals
  $('.header-help__item').click(function (e) {
    e.preventDefault();
    var mName = $(this).attr('href');
    $('.modal').show();
    $('.modal-window').hide();
    $('.modal-window'+mName).show();
    $('body').addClass('ovh');
  });
  $('.modal-window__close').click(function () {
    $('.modal').hide();
    $('.modal-window').hide();
    $('body').removeClass('ovh');
  });
  $(document).click(function (e) {
    if(e.target === $('.modal')[0]){
      $('.modal').hide();
      $('.modal-window').hide();
      $('body').removeClass('ovh');
    }
  });

  if($('.home-news__items').length > 0){
    $('.home-news__items').slick({
      dots: true,
      arrows: false,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }
  if($('.home-feedbacks-slider').length > 0){
    $('.home-feedbacks-slider').slick({
      dots: true,
      arrows: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.home-feedbacks-slider__prev'),
      nextArrow: $('.home-feedbacks-slider__next'),
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }


  if($('.filter').length > 0){
    $('.filter-category__top').click(function () {
      if($(this).closest('.filter-category').hasClass('filter-category_opened')){
        $(this).closest('.filter-category').removeClass('filter-category_opened');
        $(this).siblings('.filter-category__list').slideUp();
      }else {
        $(this).closest('.filter-category').addClass('filter-category_opened');
        $(this).siblings('.filter-category__list').slideDown();
      }
    });
  }
  if($('.vacancies-sort').length > 0){
    $('.vacancies-sort').click(function () {
      $(this).toggleClass('vacancies-sort_active');
      $('.vacancies-sort__list').slideToggle(250);
    });
  }

  if($('.car').length > 0){
    $('.car-media-big').slick({
      dots: false,
      arrows: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.car-media-small',
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
    $('.car-media-small').slick({
      dots: false,
      arrows: false,
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.car-media-big',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            variableWidth: true
          }
        }
      ]
    });
    $('.car-tabs-controls__link').click(function (e) {
      e.preventDefault();
      var tab = $(this).attr('href');
      $('.car-tabs-controls__link').removeClass('car-tabs-controls__link_active');
      $(this).addClass('car-tabs-controls__link_active');
      $('.car-tab').hide();
      $('.car-tab'+tab).show();
    });
  }

  // mobile

  const mediaQuery = window.matchMedia('(max-width: 767px)');
  if (mediaQuery.matches ) {
    $('.has-submenu').click(function () {
      $(this).find('.submenu').slideToggle(250);
    });
    $('.menu__link').click(function (e) {
      e.stopPropagation();
    });
    $('.header-mobile__bar').click(function () {
      $('.header').toggleClass('header_opened');
      if($('.header').hasClass('header_opened')){
        $('body').addClass('ovh');
      }else {
        $('body').removeClass('ovh');
      }
    });
    $('.footer__heading').click(function () {
      $(this).toggleClass('footer-menu_active');
      $(this).siblings('.footer-menu').slideToggle(250);
    });

    $('.catalogue-sort__title').click(function () {
        $(this).siblings('.catalogue-sort__items').toggleClass('opened');
    })
  }

  $('.filter-mobile-open').click(function () {
    $('.fitler-wrapper').addClass('fitler-wrapper_active');
  });
  $('.fitler-mobile-close').click(function () {
    $('.fitler-wrapper').removeClass('fitler-wrapper_active');
  });

})