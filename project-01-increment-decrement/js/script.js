const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

let count = 0;

incrementBtn.addEventListener('click', () => {
   count += 1;
   counter.textContent = count;

   if(count >= 10){
      incrementBtn.setAttribute('disabled', true);
   }else{
      incrementBtn.removeAttribute('disabled', false);
   }
   
});

decrementBtn.addEventListener('click', () => {
   count -= 1;
   counter.textContent = count;

      if(count <= 0){
      decrementBtn.setAttribute('disabled', true);
   }else{
      decrementBtn.removeAttribute('disabled', false);
   }
});