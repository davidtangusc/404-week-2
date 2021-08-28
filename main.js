const renderActivity = Handlebars.compile($("#activity-template").html());

let lastActivityType;

$.ajax({
  type: "GET",
  url: "https://www.boredapi.com/api/activity",
}).then((activity) => {
  lastActivityType = activity.type;
  const html = renderActivity(activity);
  $("#results").html(html);
});

$("#results").on("click", "button", function () {
  console.log(lastActivityType);
});
