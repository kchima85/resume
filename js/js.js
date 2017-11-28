$(document).ready(function() {
  $('.main-carousel').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    pageDots: false
  });

  $('.about-me').waypoint(function(direction) {
    $('.second-pic-wp').addClass('animated fadeInLeft')
    $('.about-me-text').addClass('animated fadeInRight')
    $('.buttons').addClass('animated fadeInUp')
  }, {
    offset: '557px'
  })

  // $('.buttons').waypoint(function(direction) {
    
  // }, {
  //   offset: '950px'
  // })
});