$(document).ready(function () {

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

  const mediaQuery = window.matchMedia('(max-width: 767px)');
  if (mediaQuery.matches ) {
    $('.has-submenu').click(function () {
      $(this).find('.submenu').slideToggle(250);
    });
    $('.menu__link').click(function (e) {
      e.stopPropagation();
    });
    $('.header-mobile__bar').click(function () {
      $('body').toggleClass('ovh');
      $('.header').toggleClass('header_opened');
    });
    $('.footer__heading').click(function () {
      $(this).siblings('.footer-menu').slideToggle(250);
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
            slidesToShow: 2
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

})