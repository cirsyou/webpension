$(function() {
  // every second update current time
  setInterval(function() {
    var currentTime = 'Current Time: ' + new Date()
    $('#footer').html(currentTime)
  }, 1000)
})