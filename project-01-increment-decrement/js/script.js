const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

let count = 0;
const updateCounter = (value) => {
    count += value;
    counter.textContent = count;

    incrementBtn.disabled = count >= 10;
    decrementBtn.disabled = count <= 0;
};

incrementBtn.addEventListener('click', () => {
    updateCounter(1);
})

decrementBtn.addEventListener('click', () => {
    updateCounter(-1);
});

updateCounter(0);
