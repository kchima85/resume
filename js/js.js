$(document).ready(function() {
  $('.main-carousel').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    pageDots: false
  });

  $('.second-pic-wp').waypoint(function(direction) {
    $('.second-pic-wp').addClass('animated fadeInLeft')
  }, {
    offset: '50%'
  })

});