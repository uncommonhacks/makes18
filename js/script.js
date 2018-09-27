let update = function() {
  if (document.cookie != "") {
    if (document.cookie.includes("name=")) {
      let sections = document.getElementsByClassName("section");
      Array.from(sections).forEach(elem => {
        if (elem.classList.contains("collapsed")) {
          elem.classList.remove("collapsed");
        }
      });
    } else {
      console.log("No name cookie set");
    }
  } else {
    console.log("No cookies set; should just display main landing");
  }
};

update();
