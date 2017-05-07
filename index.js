$(document).ready(function() {

  // GLOBAL //
  var buzzer = $("#buzzer")[0];
  var count = parseInt($("#num5").html());
  var breakTime = parseInt($("#break5").html());
  $("#reset, #timetype, .alert-success").hide();

  // START //

  $("#start").click(function() {
    var counter = setInterval(timer, 1000);
    count *= 60;
    breakTime *= 60;

    // TIMER //

    function timer() {
      $("#start, #addClock, #minusClock, #addBreak, #minusBreak, .timetitle, #break5").hide();
      $("#timetype").show();
      $("#timetype").html("work hard");

      // SESSION //

      count -= 1;
      $("#reset").show();

      if (count === 0){
        clearInterval(counter);
        const startBreak = setInterval(breakTimer, 1000);
        $("#num5").hide();
      }

      if (count % 60 >= 10){
        $("#num5").html(Math.floor(count/60) + ":" + count % 60);
      } else {
        $("#num5").html(Math.floor(count/60) + ":" + "0" + count % 60);
      }

      // BREAK //

      function breakTimer() {
        $("#timetype").html("play hard");
        $("#break5").show();
        breakTime -= 1;
        $("#reset").show();

        if (breakTime <= 0) {
          clearInterval(breakTime);
          $("#break5, #timetype").hide();
          buzzer.play();
          $(".alert-success").show();
        }

        if (breakTime % 60 >= 10){
          $("#break5").html(Math.floor(breakTime/60) + ":" + breakTime % 60);
        } else {
          $("#break5").html(Math.floor(breakTime/60) + ":" + "0" + breakTime % 60);
        }

      };

    };
  });

  // CLICK FUNCTIONS //

  $("#reset").click(function() {
    location.reload();
  });

  $("#addClock").click(function() {
    if(count < 60) {
      count += 5;
      $("#num5").html(count);
    }
  });

  $("#minusClock").click(function() {
    if(count > 5) {
      count -= 5;
      $("#num5").html(count);
    }
  });

  $("#addBreak").click(function() {
    if(breakTime < 30) {
      breakTime += 5;
      $("#break5").html(breakTime);
    }
  });

  $("#minusBreak").click(function() {
    if(breakTime > 5) {
      breakTime -= 5;
      $("#break5").html(breakTime);
    }
  });

});
