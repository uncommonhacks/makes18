// From https://www.w3schools.com/js/js_cookies.asp
let getCookie = function(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

let setNameCookie = function() {
  let name = document.getElementsByName("name")[0].value;

  document.cookie = "name=" + name;

  update();
};

let update = function() {
  if (document.cookie != "") {
    if (document.cookie.includes("name=")) {
      // Show collapsed sections.
      let sections = document.getElementsByClassName("section");
      Array.from(sections).forEach(elem => {
        if (elem.classList.contains("collapsed")) {
          elem.classList.remove("collapsed");
        }
      });
      // Remove name input section.
      headElement = document.getElementById("head");
      headElement.classList.add("collapsed");

      // Get name from cookies.
      name = getCookie("name");
      greeting = "Hi " + name + "!";
      // Dispaly greeting.
      let greetingElement = document.getElementById("greeting-name");
      greetingElement.innerHTML = greeting;
      
    } else {
      console.log("No name cookie set");
    }
  } else {
    console.log("No cookies set; should just display main landing");
  }
};

update();
