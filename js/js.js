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

  $('.work-experience').waypoint(function(direction) {
    $('.work-experience').addClass('animated zoomIn')
  }, {
    offset: '50%'
  })

  $('.main-carousel').waypoint(function(direction) {
    $('.main-carousel').addClass('animated fadeIn')
  }, {
    offset: '50%'
  })

  $('.education-section').waypoint(function(direction) {
    $('.education-section').addClass('animated zoomIn')
  }, {
    offset: '50%'
  })

  $('.colleges-1').waypoint(function(direction) {
    $('.colleges-1').addClass('animated fadeInLeft')
    $('.colleges-2').addClass('animated fadeInRight')
  }, {
    offset: '50%'
  })

  $('.people-say').waypoint(function(direction) {
    $('.people-say').addClass('animated zoomIn')
  }, {
    offset: '50%'
  })

  $('.review-pics').waypoint(function(direction) {
    $('.review-pics').addClass('animated fadeIn')
    $('.review').addClass('animated fadeIn')
  }, {
    offset: '50%'
  })

  $('.projects').waypoint(function(direction) {
    $('.projects').addClass('animated zoomIn')
  }, {
    offset: '50%'
  })

  $('.project-1').waypoint(function(direction) {
    $('.project-1').addClass('animated fadeInLeft')
    $('.project-2').addClass('animated fadeInRight')
  }, {
    offset: '50%'
  })

  $('.interests-hobbies').waypoint(function(direction) {
    $('.interests-hobbies').addClass('animated zoomIn')
    $('.hobbies').addClass('animated fadeIn')
  }, {
    offset: '65%'
  })
  
});