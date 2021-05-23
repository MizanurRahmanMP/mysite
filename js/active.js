

// slider-active

  
$('.slider-active').slick({
    infinite: true,
    slidesToShow: 1,
    arrows:false,
    autoplay:true,
    dots: false,
    slidesToScroll: 1
    
  });

  // testimonial-active

  $('.testimonial-active').slick({
    infinite: true,
    slidesToShow: 1,
    arrows:false,
    autoplay:true,
    dots: true,
    slidesToScroll: 1
  });
// brand-active

  $('.brand-active').slick({
    infinite: true,
    slidesToShow: 5,
    arrows:false,
    autoplay:true,
    dots: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
          
        }
      },
      {
        breakpoint: 676,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // counter 

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});



