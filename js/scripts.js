
$(document).ready(function () {
  $(".groceries").submit(function (event) {
    var groceries = $("#groceries").val();

    var list = groceries.toUpperCase().map(function (item) {
      return list;
    });
    // $(".foods").text(foodsInput);
    // $(".movies").text(moviesInput);
    // $(".sports").text(sportsInput);

    $("#list").show();


    event.preventDefault();
  });
});
