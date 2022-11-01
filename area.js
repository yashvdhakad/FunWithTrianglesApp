const sides = document.querySelectorAll(".sides");
const checkBtn = document.querySelector("#checkBtn");
const outputBox = document.querySelector("#outputBox");

const calculateArea = () => {
    const a = Number(sides[0].value);
    const b = Number(sides[1].value);
    const c = Number(sides[2].value);
    const s = (a+b+c)/2;
    const area = Math.sqrt(s*(s - a)*(s - b)*(s - c));
    outputBox.innerText = `Area of your triangle is ${area}`;
}

checkBtn.addEventListener("click", calculateArea);