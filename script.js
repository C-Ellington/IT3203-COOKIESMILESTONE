// IT 3203 Milestone 2 Quiz Script
// This script grades the quiz, shows detailed results,
// and clears the results area when the quiz is reset.

document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quiz-form");
    const resultsBox = document.getElementById("quiz-results");
    const resultsSummary = document.getElementById("results-summary");
    const resultsDetails = document.getElementById("results-details");

    const answerKey = {
        q1: "cookie",
        q2: "b",
        q3: "c",
        q4: "b",
        q5: ["a", "c"]
    };

    quizForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let score = 0;
        const totalQuestions = 5;
        let detailsHtml = "<h3>Question Review</h3><ol>";

        // Question 1: fill in the blank
        const q1Input = document.getElementById("q1").value.trim().toLowerCase();
        const q1Correct = q1Input === answerKey.q1;
        if (q1Correct) score++;
        detailsHtml += `
            <li>
                <p><strong>Q1:</strong> A small file saved by a website in the browser is called a ________.</p>
                <p class="${q1Correct ? "correct" : "incorrect"}">Result: ${q1Correct ? "Correct" : "Incorrect"}</p>
                <p>Your answer: ${q1Input || "No answer"}</p>
                <p>Correct answer: cookie</p>
            </li>`;

        // Question 2
        const q2Input = document.querySelector('input[name="q2"]:checked');
        const q2Value = q2Input ? q2Input.value : "No answer";
        const q2Correct = q2Value === answerKey.q2;
        if (q2Correct) score++;
        detailsHtml += `
            <li>
                <p><strong>Q2:</strong> Which cookie type usually disappears when the browser closes?</p>
                <p class="${q2Correct ? "correct" : "incorrect"}">Result: ${q2Correct ? "Correct" : "Incorrect"}</p>
                <p>Your answer: ${q2Value}</p>
                <p>Correct answer: Session cookie</p>
            </li>`;

        // Question 3
        const q3Input = document.querySelector('input[name="q3"]:checked');
        const q3Value = q3Input ? q3Input.value : "No answer";
        const q3Correct = q3Value === answerKey.q3;
        if (q3Correct) score++;
        detailsHtml += `
            <li>
                <p><strong>Q3:</strong> Which type of cookie is most connected to ad tracking across websites?</p>
                <p class="${q3Correct ? "correct" : "incorrect"}">Result: ${q3Correct ? "Correct" : "Incorrect"}</p>
                <p>Your answer: ${q3Value}</p>
                <p>Correct answer: Third-party cookie</p>
            </li>`;

        // Question 4
        const q4Input = document.querySelector('input[name="q4"]:checked');
        const q4Value = q4Input ? q4Input.value : "No answer";
        const q4Correct = q4Value === answerKey.q4;
        if (q4Correct) score++;
        detailsHtml += `
            <li>
                <p><strong>Q4:</strong> Why do websites use essential cookies?</p>
                <p class="${q4Correct ? "correct" : "incorrect"}">Result: ${q4Correct ? "Correct" : "Incorrect"}</p>
                <p>Your answer: ${q4Value}</p>
                <p>Correct answer: To support basic site functions such as login and shopping carts</p>
            </li>`;

        // Question 5: multi-selection
        const q5Checked = Array.from(document.querySelectorAll('input[name="q5"]:checked')).map((item) => item.value).sort();
        const correctMulti = [...answerKey.q5].sort();
        const q5Correct = JSON.stringify(q5Checked) === JSON.stringify(correctMulti);
        if (q5Correct) score++;
        detailsHtml += `
            <li>
                <p><strong>Q5:</strong> Which actions can help protect online privacy? Select all that apply.</p>
                <p class="${q5Correct ? "correct" : "incorrect"}">Result: ${q5Correct ? "Correct" : "Incorrect"}</p>
                <p>Your answer: ${q5Checked.length ? q5Checked.join(", ") : "No answer"}</p>
                <p>Correct answer: Review browser cookie settings and read cookie consent choices carefully</p>
            </li>`;

        detailsHtml += "</ol>";

        const percent = Math.round((score / totalQuestions) * 100);
        const passed = percent >= 70;
        resultsSummary.innerHTML = `
            <h2>${passed ? "Pass" : "Fail"}</h2>
            <p class="${passed ? "pass" : "fail"}">Overall result: ${passed ? "Pass" : "Fail"}</p>
            <p><strong>Total score:</strong> ${score} / ${totalQuestions} (${percent}%)</p>`;
        resultsDetails.innerHTML = detailsHtml;
        resultsBox.classList.remove("hidden");
    });

    quizForm.addEventListener("reset", function () {
        resultsSummary.innerHTML = "";
        resultsDetails.innerHTML = "";
        resultsBox.classList.add("hidden");
    });
});
