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
  }, {
    offset: '557px'
  })

  $('.second-paragraph').waypoint(function(direction) {
    $('.buttons').addClass('animated fadeInUp')
  }, {
    offset: '560px'
  })
});