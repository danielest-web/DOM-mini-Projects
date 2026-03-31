const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
const message = document.getElementById('message');

let count = 0;

const updateCounter = (value) => {
    count += value;
    counter.textContent = count;

    counter.classList.remove('max' , 'min');

    incrementBtn.disabled = count >= 10;
    decrementBtn.disabled = count <= 0;
    resetBtn.disabled = count == 0;

    if (count === 10) {
        counter.classList.add('max');
        message.textContent = "Máximo atingido";
    } else if (count === 0) {
         counter.classList.add('min');
         message.textContent = "Mínimo atingido";
    } else {
        message.textContent = "";
   }

};

incrementBtn.addEventListener('click', () => {
    updateCounter(1);
})

decrementBtn.addEventListener('click', () => {
    updateCounter(-1);
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter(0);
});

updateCounter(0);
