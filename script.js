$(function () {
  var sliderWidth = $(".slider").width();
  var nowLi = 3;
  var li_count = $(".slider li").length;

  $(".slider ul").css({ width: li_count * sliderWidth });
  $(".slider li").css({ width: sliderWidth });

  for (var i = 0; i < li_count; i++) {
    $(".sliderControl").append("<a></a>");
  }

  $(".sliderControl a, .slider li").click(function () {
    nowLi = $(this).index();
    sliderChange();
    $(".sliderControl a").eq(nowLi).css({ "background-color": "#F6C555" });
    $(".sliderControl a")
      .eq(nowLi)
      .siblings()
      .css({ "background-color": "#333" });
    $(".slider li").eq(nowLi).css({ transform: "rotateY(0)" });
    $(".slider li").eq(nowLi).prevAll().css({ transform: "rotateY(60deg)" });
    $(".slider li").eq(nowLi).nextAll().css({ transform: "rotateY(-60deg)" });
    $(".slider li").eq(0).css({ left: "-60px" });
  });

  function sliderChange() {
    $(".slider ul")
      .stop(true, false)
      .animate({ left: sliderWidth * nowLi * -1 }, 500);
  }

  var timer = setInterval(perpic, 5000);

  function perpic() {
    console.log("nowLi = " + nowLi);
    nowLi++;
    if (nowLi >= li_count) {
      nowLi = 0;
    }
    sliderChange();
    $(".sliderControl a").eq(nowLi).css({ "background-color": "#F6C555" });
    $(".sliderControl a")
      .eq(nowLi)
      .siblings()
      .css({ "background-color": "#333" });
    $(".slider li").eq(nowLi).css({ transform: "rotateY(0)" });
    $(".slider li").eq(nowLi).prevAll().css({ transform: "rotateY(60deg)" });
    $(".slider li").eq(nowLi).nextAll().css({ transform: "rotateY(-60deg)" });
  }

  $(".slider").hover(
    function () {
      clearInterval(timer);
      $(".timer .percentage").removeClass("gogo");
    },
    function () {
      timer = setInterval(perpic, 5000);
      $(".timer .percentage").addClass("gogo");
    }
  );
});
