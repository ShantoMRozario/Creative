// gallery
var mixer = mixitup('.portfolio');


// slider
$('.slick_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    responsive: [
      {
        breakpoint: 575.98,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });

$('.feedback_slick_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 1500,
    dots:true,
    responsive: [
      {
        breakpoint: 575.98,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });