const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e=> {
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index])
            score += 1/correctAnswers.length;
    });
    score = parseInt((score*100));

    scrollTo(0,0);
    result.removeAttribute('class', 'd-none');
    console.log(score)
    let scoreIncreasing = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${scoreIncreasing}%`;
        if (scoreIncreasing === score)
            clearInterval(timer);
        else
            scoreIncreasing++;
    }, 10);

});