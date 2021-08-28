const renderActivity = Handlebars.compile($("#activity-template").html());

$.ajax({
  type: "GET",
  url: "https://www.boredapi.com/api/activity",
}).then((activity) => {
  const html = renderActivity(activity);
  $("#results").html(html);
});
