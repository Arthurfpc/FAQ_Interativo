const questions = document.querySelectorAll('.faq-item .question');

questions.forEach((q) => {
    q.addEventListener('click', () => {
        const currentlyActive = document.querySelector('.question.active');

        if (currentlyActive && currentlyActive !== q) {
            currentlyActive.classList.remove('active');
            currentlyActive.nextElementSibling.classList.add('hidden');
        }

        q.classList.toggle('active');
        const answer = q.nextElementSibling;
        answer.classList.toggle('hidden');
    });
});
