const sideA = document.querySelector("#sideA");
const sideB = document.querySelector("#sideB");
const checkBtn = document.querySelector("#checkBtn");
const outputBox = document.querySelector("#outputBox");

const calculateHypotenuse = () => {
    const a = Number(sideA.value);
    const b = Number(sideB.value);
    const sideC = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    outputBox.innerText = `Hypotenuse of your triangle is ${sideC}`;
}

checkBtn.addEventListener("click", calculateHypotenuse);