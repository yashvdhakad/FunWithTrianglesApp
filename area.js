const sideA = document.querySelector("#sideA");
const sideB = document.querySelector("#sideB");
const sideC = document.querySelector("#sideC");
const checkBtn = document.querySelector("#checkBtn");
const outputBox = document.querySelector("#outputBox");

const calculateArea = () => {
    const a = Number(sideA.value);
    const b = Number(sideB.value);
    const c = Number(sideC.value);
    const s = (a+b+c)/2;
    const area = Math.sqrt(s*(s - a)*(s - b)*(s - c));
    outputBox.innerText = `Area of your triangle is ${area}`;
}

checkBtn.addEventListener("click", calculateArea);