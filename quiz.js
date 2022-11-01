const quizForm = document.querySelector("#quizForm")
const submitBtn = document.querySelector("#submitBtn")
const outputBox = document.querySelector("#outputBox")

const rightAns = ["90°", "right angled"];

const calculateScore = () => {
    let i = 0;
    let score = 0;
    const formResult = new FormData(quizForm);
    for ( let value of formResult.values()) {
        if (value === rightAns[i]) {
            score++;
        }
        i++;
    }
    outputBox.innerText = `You've scored ${score}.`
}

submitBtn.addEventListener("click", calculateScore);