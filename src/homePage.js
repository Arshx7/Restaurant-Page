import image from "./images/home-bg.jpg";
export function home() {
    const content = document.querySelector("#content");
    
    const img = document.createElement("img");
    const heading1 = document.createElement("h1");
    const paragraph = document.createElement("p");

    heading1.textContent = "KERA CAFE";
    heading1.classList.add("mainHeading")

    paragraph.textContent = "Nestled in a quaint corner of the city, Kera Cafe offers a cozy ambiance and a delightful menu. With its rustic decor and warm lighting, Kera Cafe promises a memorable experience."
    paragraph.classList.add("mainPara")
    img.src = image;

    content.appendChild(img);
    content.appendChild(heading1);
    content.appendChild(paragraph);
   
}