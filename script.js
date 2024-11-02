let isDarkTheme = false;

const button = document.querySelector(".js-mode-button"); //button
const navbar = document.querySelector(".navbar"); //navbar
const jumbotron = document.querySelector(".jumbotron");
const jumbotron1 = document.querySelector(".jumbotron1");
const jumbotron2 = document.querySelector(".jumbotron2");

const separator = document.querySelector(".separator");
const separator1 = document.querySelector(".separator1");
const separator2 = document.querySelector(".separator2");
const separator3 = document.querySelector(".separator3");

button.addEventListener("click", () => {
  if (!isDarkTheme) {
    button.innerHTML = "Light";
    console.log("mode pagi");
    navbar.classList.remove("bg-primary");
    navbar.classList.add("css-dark-mode");

    jumbotron.classList.remove("bg-primary");
    jumbotron.classList.add("bg-dark");

    jumbotron1.classList.remove("bg-primary");
    jumbotron1.classList.add("bg-dark");

    jumbotron2.classList.remove("bg-primary");
    jumbotron2.classList.add("bg-dark");

    separator.setAttribute("fill", "#bcbdbe");
    separator1.setAttribute("fill", "#bcbdbe");
    separator2.setAttribute("fill", "#bcbdbe");
    separator3.setAttribute("fill", "#bcbdbe");
    isDarkTheme = true;
  } else {
    button.innerHTML = "Dark";
    console.log("mode malam");
    jumbotron.classList.add("bg-primary");
    jumbotron.classList.remove("bg-dark");

    jumbotron1.classList.add("bg-primary");
    jumbotron1.classList.remove("bg-dark");

    jumbotron2.classList.add("bg-primary");
    jumbotron2.classList.remove("bg-dark");

    navbar.classList.remove("css-dark-mode");
    navbar.classList.add("bg-primary");

    separator.setAttribute("fill", "#b6d3fe");
    separator1.setAttribute("fill", "#b6d3fe");
    separator2.setAttribute("fill", "#b6d3fe");
    separator3.setAttribute("fill", "#b6d3fe");
    isDarkTheme = false;
  }
});
