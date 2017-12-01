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
    offset: '50%'
  })

  $('.buttons').waypoint(function(direction) {
    $('.buttons').addClass('animated fadeInUp')
  }, {
    offset: '50%'
  })

  $('.skill-set').waypoint(function(direction) {
    $('.skill-section').addClass('animated zoomIn')
  }, {
    offset: '50%'
  })

  $('.tech-skills-1').waypoint(function(direction) {
    $('.tech-skills-1').addClass('animated slideInUp')
  }, {
    offset: '50%'
  })

  $('.tech-skills-2').waypoint(function(direction) {
    $('.tech-skills-2').addClass('animated slideInUp')
  }, {
    offset: '50%'
  })

  $('.tech-skills-3').waypoint(function(direction) {
    $('.tech-skills-3').addClass('animated slideInUp')
  }, {
    offset: '50%'
  })

  $('work-experience').waypoint(function() {
    Waypoint.refreshAll();
  }, {
  })

  $('.education-section').waypoint(function(direction) {
    $('.education-section').addClass('animated zoomIn')
  }, {
    offset: '80%'
  })

  $('.colleges').waypoint(function(direction) {
    $('.colleges').addClass('animated fadeIn')
  }, {
    offset: '80%'
  })

  $('.projects-header').waypoint(function(direction) {
    $('.projects-header').addClass('animated zoomIn')
  }, {
    offset: '80%'
  })

  $('.projects').waypoint(function(direction) {
    $('.projects').addClass('animated fadeIn')
  }, {
    offset: '80%'
  })
});