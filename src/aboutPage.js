export function about() {
    const content = document.querySelector("#content");
    const heading1 = document.createElement("h1");
    const paragraph = document.createElement("p");

    heading1.textContent = "About Kera Cafe";
    paragraph.textContent = "At Kera Cafe, we pride ourselves on providing a welcoming environment and exceptional service.";

    content.appendChild(heading1);
    content.appendChild(paragraph);
}
