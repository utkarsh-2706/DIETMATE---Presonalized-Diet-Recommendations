// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {

        // Function to toggle the visibility of the answer
        window.toggleAnswer = function (answerId) {
            var answer = document.getElementById(answerId);
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        };
});
