const angle = document.querySelectorAll(".angles");
const isTriangleBtn = document.querySelector("#isTriangleBtn");
const outputBox = document.querySelector("#outputBox");

const calculateSum = (angle1, angle2, angle3) => {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
};

const isTriangle = () => {
    const angle1 = Number(angle[0].value);
    const angle2 = Number(angle[1].value);
    const angle3 = Number(angle[2].value);
    const sumOfAngles = calculateSum(angle1, angle2, angle3);
    if (sumOfAngles === 180) {
        outputBox.innerText = "These angles form a triangle.";
    } else {
        outputBox.innerText = "These angles don't form a triangle.";
    }
};

isTriangleBtn.addEventListener("click", isTriangle);