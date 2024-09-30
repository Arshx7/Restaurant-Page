import { home } from "./homePage.js"
import { menu } from "./menuPage.js";
import { about } from "./aboutPage.js";
import "./styles.css";

home();
const content = document.querySelector("#content");
const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");

homeBtn.addEventListener("click", () =>  {
    content.innerHTML = "";
    home();
})

menuBtn.addEventListener("click", () =>  {
    content.innerHTML = "";
    menu();
})

aboutBtn.addEventListener("click", () =>  {
    content.innerHTML = "";
    about();
})

