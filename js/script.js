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
  let nameInput = document.getElementsByName("name")[0];

  document.cookie = "name=" + nameInput.value;
  nameInput.value = "";

  update();
};

let resetNameCookie = function() {
  // The empty string is handled like a blank cookie
  document.cookie = "name=";

  update();
};

// Updates or initializes the page, checking if a name cookie is set and rendering
// things accordingly
let update = function() {
  let name = getCookie("name");
  if (name != "") {
      // Show collapsed sections and blocks
      let sections = document.getElementsByClassName("section-container");
      Array.from(sections).forEach(elem => {
        if (elem.classList.contains("collapsed")) {
          elem.classList.remove("collapsed");
        }
      });

      // Collapse the name input section
      let inputLandingElement = document.getElementById("inputLanding");
      inputLandingElement.classList.add("collapsed");

      // Display greeting
      let greetingElement = document.getElementById("greeting-name");
      greetingElement.innerHTML = "Hi " + name + "!";

      // Display wrong name button
      let wrongNameElement = document.getElementById("wrong-name");
      wrongNameElement.innerHTML = "Not " + name + "?";
  } else {
    console.log("No name cookie set, rendering the input page.");

    // Collapse all sections
    let sections = document.getElementsByClassName("section-container");
    Array.from(sections).forEach(elem => {
      elem.classList.add("collapsed");
    });

    // Unhide the input landing section
    let inputLanding = document.getElementById("inputLanding");
    inputLanding.classList.remove("collapsed");
  }
};

let toggleFAQ = function(ind) {
  if (ind < 0 || ind > 6) {
    return;
  }

  let collapsedFAQSection = document.getElementById("faq-" + ind);

  // Add or remove the faq-collapsed class
  if (collapsedFAQSection.classList.contains("faq-collapsed")) {
    collapsedFAQSection.classList.remove("faq-collapsed");
  } else {
    collapsedFAQSection.classList.add("faq-collapsed");
  }

  console.log("Toggled" + ind);
};

let init = function() {
  // Render things based on whether the name cookie is set
  update();

  // Unhide the landing
  let inputLanding = document.getElementById("#inputLanding");
  inputLanding.classList.remove("collapsed");
  console.log("hi");

  // Setup enter keypress handler for name input
  let nameInput = document.getElementsByName("name")[0];

  nameInput.addEventListener("keyup", function(event) {
    // Probably doesn't do anything
    event.preventDefault();

    if (event.keyCode === 13) {
      setNameCookie();
    }
  });
};

init();
