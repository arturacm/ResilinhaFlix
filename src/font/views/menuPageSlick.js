//Configurações do carrossel
$('.items').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    slidesToScroll: 3,
    variableWidth: true,
    arrows:true,
    infinite:true,
    dots: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: true,
          centerPadding: '40px',
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: '40px'
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px'
        }
      }
  ]
  });