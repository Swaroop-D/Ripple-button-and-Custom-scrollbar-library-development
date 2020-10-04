// custom scroll bar
const parentDiv = document.createElement('div');
parentDiv.classList.add('scr-surrounding');
const div = document.createElement('div');
div.classList.add('scrollbar');
div.setAttribute('id', 'scrollbar');
div.setAttribute('draggable', 'false');

parentDiv.appendChild(div);
document.body.appendChild(parentDiv);

let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let scrolled = (winScroll / height) * 100;


function scrollBar() {
  div.setAttribute('style', `height: ${scrolled}%;`)
}

scrollBar();

window.addEventListener('scroll', () => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;

  function scrollBar() {
    div.setAttribute('style', `height: ${scrolled}%;`)
  }
  scrollBar();
});

// ripple btns
const button = document.querySelectorAll('[data-ripple = true]'),
  body = document.querySelector('body'),
  animationTime = document.querySelector('#ripple-btn').getAttribute('data-animation-time'),
  animateOn = document.querySelector('#ripple-btn').getAttribute('data-animate-on');

button.forEach(btn => {
  btn.addEventListener('mousedown', function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripple = document.createElement('ripple');

    if (body.classList.contains('ripple-color-dark')) {
      ripple.classList.add('ripple-dark');
      console.log('dark html', body.classList)
    }

    ripple.setAttribute('style', `top: ${y}px; left: ${x}px; animation: expand 750ms forwards;`);


    this.appendChild(ripple);

    btn.addEventListener('mouseup', () => {
      ripple.addEventListener('animationend', e => {
        e.target.setAttribute('style', 'opacity: 0;');
        setTimeout(e => {
          ripple.remove();
        }, 1500)
      });
    });
  });
});

// dark theme toggle
const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('theme-light');
  body.classList.toggle('ripple-color-dark');
  body.classList.toggle('ripple-color-light');
});