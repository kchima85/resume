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

  $('.buttons').waypoint(function(direction) {
    $('.buttons').addClass('animated fadeInUp')
  }, {
    offset: '540px'
  })

  $('.skill-set').waypoint(function(direction) {
    $('.skill-section').addClass('animated zoomIn')
  }, {
    offset: '450px'
  })

  $('.tech-skills-1').waypoint(function(direction) {
    $('.tech-skills-1').addClass('animated slideInUp')
  }, {
    offset: '450px'
  })

  $('.tech-skills-2').waypoint(function(direction) {
    $('.tech-skills-2').addClass('animated slideInUp')
  }, {
    offset: '450px'
  })

  $('.tech-skills-3').waypoint(function(direction) {
    $('.tech-skills-3').addClass('animated slideInUp')
  }, {
    offset: '450px'
  })

  $('.work-experience').waypoint(function(direction) {
    $('.work-experience').addClass('animated zoomIn')
  }, {
    offset: '450px'
  })

  $('.main-carousel').waypoint(function(direction) {
    $('.main-carousel').addClass('animated fadeIn')
  }, {
    offset: '450px'
  })
});