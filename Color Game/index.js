let items = document.querySelectorAll('.item');
let nav = document.querySelector('.navbar');
let won = document.getElementById('won')

items.forEach(item => {
  item.addEventListener('click', () => {
    if (item.style.backgroundColor == nav.style.backgroundColor) {
      return samcolor();

    } else {
      item.style.backgroundColor = "transparent";
      item.innerHTML = "X"
    }
  });
});

function samcolor() {
  items.forEach(item => {
    item.style.backgroundColor = nav.style.backgroundColor;
    item.innerHTML = ""
    won.innerHTML = "You Won"

  });
}


function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

items.forEach(item => {
  item.style.backgroundColor = getRandomColor();
});

let randomItem = items[Math.floor(Math.random() * items.length)];
nav.style.backgroundColor = randomItem.style.backgroundColor;