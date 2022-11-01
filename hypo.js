const sides = document.querySelectorAll(".sides");
const checkBtn = document.querySelector("#checkBtn");
const outputBox = document.querySelector("#outputBox");

const calculateHypotenuse = () => {
    const a = Number(sides[0].value);
    const b = Number(sides[1].value);
    const sideC = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    outputBox.innerText = `Hypotenuse of your triangle is ${sideC}`;
}

checkBtn.addEventListener("click", calculateHypotenuse);