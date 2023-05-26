const answerButton = document.querySelectorAll('.clue');

answerButton.forEach(function(button) {
    button.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        if (answer.style.display === 'none') {
            answer.style.display = 'block';
            this.textContent = 'Скрыть ответ';
        } else {
            answer.style.display = 'none';
            this.textContent = 'Подсказка';
        }
    });
});