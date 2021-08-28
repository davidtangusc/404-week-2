const renderPerson = Handlebars.compile($("#person-template").html());

const david = {
  name: "David Tang",
  // name: "David Tang<script>alert('hi')</script>",
  image:
    "https://www.gravatar.com/avatar/1c31a96c0a474a6795637081bde42acc.png?s=500",
  hobbies: [
    { name: "Credit Card Rewards", years: 2 },
    { name: "Ice Hockey", years: 25 },
  ],
};

const html = renderPerson(david);
$("#results").html(html);
