function calculateAvarage(techning, practical, content) {
    return (techning + practical + content) / 3;
}

function calculatePercentage(average) {
    return (average / 10) * 100;
}

function getclasification(avarage) {
    if (avarage >= 8) {
        return "Excellent";
    }

    if (avarage >= 6) {
        return "Good";
    }

    if (avarage >= 4) {
        return "Average";
    }

    return "Needs improvement";
}

function validatefeedback() {
    const result = document.getElementById("feedback-result");
    const scoreInputs = [
        document.getElementById("teaching-score"),
        document.getElementById("practical-score"),
        document.getElementById("content-score")
    ];
    const scores = scoreInputs.map((input) => parseFloat(input.value));

    if (scores.some((score) => isNaN(score) || score < 0 || score > 10)) {
        result.textContent = "Enter a valid score between 0 and 10 for all three categories.";
        return false;
    }

    const avarage = calculateAvarage(scores[0], scores[1], scores[2]);
    const percentage = calculatePercentage(avarage);
    result.textContent =
        `Feedback submitted successfully! Average score: ${avarage.toFixed(2)} / 10 (${percentage.toFixed(2)}%). Classification: ${getclasification(avarage)}.`;
    return true;
}

const feedbackForm = document.getElementById("feedback-form");

if (feedbackForm) {
    feedbackForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!feedbackForm.checkValidity()) {
            feedbackForm.reportValidity();
            return;
        }

        validatefeedback();
    });
}