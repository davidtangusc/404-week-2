const renderActivity = Handlebars.compile($("#activity-template").html());

let lastActivityType;

$.ajax({
  type: "GET",
  url: "https://www.boredapi.com/api/activity",
}).then((activity) => {
  lastActivityType = activity.type;

  activity.renderButton = true;
  const html = renderActivity(activity);
  $("#results").html(html);
});

$("#results").on("click", "button", function () {
  const similarActivity1Promise = $.ajax({
    type: "GET",
    url: `http://www.boredapi.com/api/activity?type=${lastActivityType}`,
  });

  const similarActivity2Promise = $.ajax({
    type: "GET",
    url: `http://www.boredapi.com/api/activity?type=${lastActivityType}`,
  });

  const similarActivity3Promise = $.ajax({
    type: "GET",
    url: `http://www.boredapi.com/api/activity?type=${lastActivityType}`,
  });

  Promise.all([
    similarActivity1Promise,
    similarActivity2Promise,
    similarActivity3Promise,
  ]).then((results) => {
    const activity1 = results[0];
    const activity2 = results[1];
    const activity3 = results[2];

    const activity1Html = renderActivity(activity1);
    const activity2Html = renderActivity(activity2);
    const activity3Html = renderActivity(activity3);

    $("#more-suggestions").html(activity1Html + activity2Html + activity3Html);
  });
});
