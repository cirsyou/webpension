$(function() {
  // every second update current time
  setInterval(function() {
    var currentTime = 'Current Time: ' + new Date()
    $('#footer').html(currentTime)
  }, 1000)
  // switch page
  $('#pageMenu li').click(function() {
    var currentIndex = $(this).index()
    if (currentIndex == 0) {
      window.location.href = '../index.html'
    } else if (currentIndex == 1) {
      window.location.href = '../pensiondata.html'
    } else if (currentIndex == 2) {
      window.location.href = '../pensionintro.html'
    } else if (currentIndex == 3) {
      window.location.href = '../discussion.html'
    }
  })
  $('#loginMenu li').click(function() {
    var currentIndex = $(this).index()
    if (currentIndex == 0) {
      window.location.href = '../login.html'
    } else if (currentIndex == 1) {
      window.location.href = '../register.html'
    }
  })
})