window.onload = function WindowLoad(event) {
  let count = 0;

  const number = document.getElementById('number');
  const btns = document.querySelectorAll('button');

  btns.forEach(function (btn) {
    btn.addEventListener('click', function(el) {
      const button = el.currentTarget.classList;

      if (button.contains('decrease')) {
        count--;
      } else if (button.contains('increase')) {
        count++;
      } else {
        count = 0;
      }

      if (count > 0) {
        number.style.color = 'green';
      }

      if (count < 0) {
        number.style.color = 'red';
      }

      if (count === 0) {
        number.style.color = 'black';
      }

      number.textContent = count
    })
  })
}