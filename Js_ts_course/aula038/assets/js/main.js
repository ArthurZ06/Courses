const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");

const styleBody = getComputedStyle(document.body);
const backgroundColorBody = styleBody.backgroundColor;
console.log(backgroundColorBody);
const colorWhite = styleBody.colorWhite

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody
    p.style.color = '#FFF';
}


