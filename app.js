const kittens = [
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

window.addEventListener('load', () => { loadKittens(); })

const thumbs = document.getElementById('kitten-thumbs');

const loadKittens = () => {
  kittens.forEach(kitten => {
    const figure = document.createElement('figure');
    figure.className = 'figure-thumb';

    const img = document.createElement('img');
    img.className = 'kitten-thumb';
    img.src = kitten.src;
    figure.append(img);

    const caption = document.createElement('figcaption');
    caption.className = 'caption-thumb bold';
    caption.innerText = kitten.name;
    figure.append(caption);

    thumbs.append(figure);
  })
    addKitten(kittens[0]);
}

thumbs.addEventListener('click', (e) => {
  const kName = e.target.nextSibling.innerHTML;
  const kitten = kittens.find(kit => { return kit.name === kName; });
  addKitten(kitten);
})

const addKitten = (kitten) => {
  const caption = document.getElementById('caption');
  caption.innerHTML = kitten.name;

  const img = document.getElementById('kitten-img');
  img.addEventListener('click', () => { updateCount(kitten); })
  img.src = kitten.src;

  const count = document.getElementById('count');
  count.innerText = kitten.count;
}

const updateCount = (kitten) => {
  kitten.count = kitten.count + 1;
  const kCount = document.getElementById('count');
  kCount.innerText = kitten.count;
}
