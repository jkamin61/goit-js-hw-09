import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      setTimeout(() => resolve({ position, delay }), delay);
    } else {
      setTimeout(() => reject({ position, delay }), delay);
    }
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const firstDelayInput = document.querySelector('[name=delay]');
  const delayStepInput = document.querySelector('[name=step]');
  const amountInput = document.querySelector('[name=amount]');
  const delay = parseInt(firstDelayInput.value, 10);
  const step = parseInt(delayStepInput.value, 10);
  const amount = parseInt(amountInput.value, 10);

  for (let i = 0; i < amount; i++) {
    createPromise(i, delay + i * step)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }

});