$(function(){

  $('.main__slider').slick({
    infinite: true,
    dots:true,
    prevArrow: '<div class="main-arrow-left"></div>',
    nextArrow: '<div class="main-arrow-right"></div>'
  }) 
})

$(function(){

  $('.delivery__slider').slick({
    slidesToShow: 3,
    infinite: true,
    prevArrow: '<div class="delivery-arrow-left"></div>',
    nextArrow: '<div class="delivery-arrow-right"></div>',
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          autoplay: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          autoplay: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          autoplay: true
        }
      }

    ]
  }) 
})

$(function(){

  $('.services__slider').slick({
    slidesToShow: 3,
    infinite: true,
    prevArrow: '<div class="delivery-arrow-left"></div>',
    nextArrow: '<div class="delivery-arrow-right"></div>',
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          autoplay: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          autoplay: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          autoplay: true
        }
      }

    ]

  }) 
})