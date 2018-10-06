// From https://www.w3schools.com/js/js_cookies.asp
// Gets a cookie by name, or returns the empty string
let getCookie = function(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

// Sets the name cookie, which is used to populate name fields on the page
let setNameCookie = function() {
  let name = document.getElementsByName("name")[0].value;

  document.cookie = "name=" + name;

  update();
};

// Updates or initializes the page, checking if a name cookie is set and rendering
// things accordingly
let update = function() {
  let name = getCookie("name");
  if (name != "") {
      // Show collapsed sections.
      let sections = document.getElementsByClassName("section");
      Array.from(sections).forEach(elem => {
        if (elem.classList.contains("collapsed")) {
          elem.classList.remove("collapsed");
        }
      });

      // Collapse the name input section.
      let headElement = document.getElementById("head");
      headElement.classList.add("collapsed");

      // Display greeting.
      let greetingElement = document.getElementById("greeting-name");
      greetingElement.innerHTML = "Hi " + name + "!";
  } else {
    console.log("No name cookie set, rendering the input page.");
  }
};

// First call to update initializes the page
update();
