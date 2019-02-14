$(document).ready(function() {
  console.log("hello world");
  $('#inject').click(function() {
    $.ajax({
      method: 'get',
      url: '/inject',
      success: function(data) {
        $('#inject-here').append(data);
      }
    });
  });
});