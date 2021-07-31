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

})