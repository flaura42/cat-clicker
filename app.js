const kittenList = {
  currentKitten: null,
  kittens: [
    {
      name: 'Chloe',
      src: './kittens/kitten1.jpg',
      count: 0
    },
    {
      name: 'Scaredy',
      src: './kittens/kitten2.jpg',
      count: 0
    },
    {
      name: 'Bubbles',
      src: './kittens/kitten3.jpg',
      count: 0
    },
    {
      name: 'Fluffy',
      src: './kittens/kitten4.jpg',
      count: 0
    },
    {
      name: 'Tiger',
      src: './kittens/kitten5.jpg',
      count: 0
    },
    {
      name: 'Angel',
      src: './kittens/kitten6.jpg',
      count: 0
    }
  ]
}

window.addEventListener('load', () => { loadKittens(); })

const loadKittens = () => {
  const thumbs = document.getElementById('kitten-thumbs');
  kittenList.kittens.forEach(kitten => {
    const figure = document.createElement('figure');
    figure.className = 'figure-thumb';

    const img = document.createElement('img');
    img.className = 'kitten-thumb';
    img.src = kitten.src;
    img.addEventListener('click', () => {
      kittenList.currentKitten = kitten;
      addKitten();
    })
    figure.append(img);

    const caption = document.createElement('figcaption');
    caption.className = 'caption-thumb bold';
    caption.innerText = kitten.name;
    figure.append(caption);

    thumbs.append(figure);
  });
  kittenList.currentKitten = kittenList.kittens[0];
  addKitten();
}

const addKitten = () => {
  const kitten = kittenList.currentKitten;
  const caption = document.getElementById('caption');
  caption.innerHTML = kitten.name;

  const img = document.getElementById('kitten-img');
  img.src = kitten.src;
  img.addEventListener('click', updateCount);

  const count = document.getElementById('count');
  count.innerText = kitten.count;
}

const updateCount = () => {
  kitten = kittenList.currentKitten;
  kittenList.currentKitten.count++;
  const kCount = document.getElementById('count');
  kCount.innerText = kittenList.currentKitten.count;
}
