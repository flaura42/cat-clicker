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
  let i = 1;
  kittens.forEach(kitten => {
    const figure = document.createElement('figure');
    figure.className = 'figure-thumb';

    const img = document.createElement('img');
    img.id = `t${i}`
    img.className = 'kitten-thumb';
    img.src = kitten.src;
    figure.append(img);

    const caption = document.createElement('figcaption');
    caption.className = 'caption-thumb bold';
    caption.innerText = kitten.name;
    figure.append(caption);

    thumbs.append(figure);
    i++
  })
}

thumbs.addEventListener('click', (e) => {
  const kName = e.target.nextSibling.innerHTML;
  const kitten = kittens.find(kit => { return kit.name === kName; });
  addKitten(kitten);
})

const addKitten = (kitten) => {
  const big = document.getElementById('kitten-big');
  big.innerHTML = '';
  const figure = document.createElement('figure');
  figure.className = 'figure-full';

  const caption = document.createElement('figcaption');
  caption.className = 'caption-full bold';
  caption.innerText = kitten.name;
  figure.append(caption);

  const img = document.createElement('img');
  img.addEventListener('click', () => { updateCount(kitten); })
  img.className = 'kitten-full';
  img.src = kitten.src;
  figure.append(img);

  const counter = document.createElement('div');
  counter.className = 'counter-div';
  const p = document.createElement('p');
  p.className = 'bold counter';
  p.innerText = 'Number of Clicks:';
  counter.append(p);

  const count = document.createElement('p');
  count.id = 'count';
  count.innerText = kitten.count;
  counter.append(count);

  figure.append(counter);
  big.append(figure);
}

const updateCount = (kitten) => {
  kitten.count = kitten.count + 1;
  const kCount = document.getElementById('count');
  kCount.innerText = kitten.count;
}
