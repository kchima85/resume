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
    offset: '700px'
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

  $('.education-section').waypoint(function(direction) {
    $('.education-section').addClass('animated zoomIn')
    $('.colleges-1').addClass('animated fadeInLeft')
    $('.colleges-2').addClass('animated fadeInRight')
  }, {
    offset: '800px'
  })

  $('.people-say').waypoint(function(direction) {
    $('.people-say').addClass('animated zoomIn')
  }, {
    offset: '800px'
  })

  $('.review-pics').waypoint(function(direction) {
    $('.review-pics').addClass('animated fadeIn')
    $('.review').addClass('animated fadeIn')
  }, {
    offset: '800px'
  })

  $('.projects').waypoint(function(direction) {
    $('.projects').addClass('animated zoomIn')
    $('.project-1').addClass('animated fadeInLeft')
    $('.project-2').addClass('animated fadeInRight')
  }, {
    offset: '75%'
  })

  $('.interests-hobbies').waypoint(function(direction) {
    $('.interests-hobbies').addClass('animated zoomIn')
    $('.hobbies').addClass('animated fadeIn')
  }, {
    offset: '75%'
  })
  
});