$(function () {
  $(".saveBtn").click(function () {
    var timeblockHour = $(this).parent().attr("id");
    var userInput = $(this).prev().val();
    localStorage.setItem(timeblockHour, userInput);
  })
  
  function setBlockColor() {
    var currentTime = dayjs().hour();
    $(".time-block").each(function () {
      var time = parseInt($(this).attr("id").split("-")[1]);
        
      if (time < currentTime) {
          $(this).addClass("past");
        } else if (time === currentTime) {
          $(this).addClass("present");
        } else {
          $(this).addClass("future");
        } 
    })
  };

  setBlockColor();
  
  function getLocalStorage () {
    var inputs = $(".description");
    inputs.each(function(index) {
      var key = "hour-" + (index + 9);
      $(this).val(localStorage.getItem(key));
    });
  }
  getLocalStorage();

  function getCurrentTime () {
    currentHour = dayjs().hour();
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY h:mm:ss a"));
    setInterval(getCurrentTime,1000);
    }

    getCurrentTime();
});
