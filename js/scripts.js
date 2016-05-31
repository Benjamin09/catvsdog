$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#user").prepend("<li>meow!</li>");
    $("ul#webpage").prepend("<li>woof!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#dog").click(function() {
    $("ul#user").prepend("<li>purr</li>");
    $("ul#webpage").prepend("<li>woof, woof!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).after("<li></li>");
    });
  });
});
