// Adding this comment to test commit

const kittenList = {
  currentKitten: null,
  kittens: [
    {
      name: 'Chloe',
      src: './kittens/kitten1.jpg',
      imgAttribution: 'my photo',
      count: 0
    },
    {
      name: 'Scaredy',
      src: './kittens/kitten2.jpg',
      imgAttribution: 'https://unsplash.com/@tim_front?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
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
      imgAttribution: 'https://img.particlenews.com/img/id/40IDHl_0P5HiRZ600?type=thumbnail_1024x768',
      count: 0
    },
    {
      name: 'Tiger',
      src: './kittens/kitten5.jpg',
      imgAttribution: 'https://chuckanddons.com/media/wysiwyg/cat_blog.JPG',
      count: 0
    },
    {
      name: 'Angel',
      src: './kittens/kitten6.jpg',
      imgAttribution: 'https://www.facebook.com/104194917967106/photos/a.104211421298789/104211334632131/?type=3&theater',
      count: 0
    }
  ]
}

window.addEventListener('load', () => {
  kittenList.currentKitten = kittenList.kittens[0];
  loadKittens();
})

const loadKittens = () => {
  const thumbs = document.getElementById('kitten-thumbs');
  thumbs.innerHTML = '';
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
  addKitten();
}

const addKitten = () => {
  const kitten = kittenList.currentKitten;
  const caption = document.getElementById('caption');
  caption.innerHTML = kitten.name;

  const img = document.getElementById('kitten-img');
  img.src = kitten.src;
  img.addEventListener('click', updateCount);

  const count = document.getElementById('kitten-count');
  count.innerText = kitten.count;
}

const updateCount = () => {
  const kitten = kittenList.currentKitten;
  kittenList.currentKitten.count++;
  const kCount = document.getElementById('kitten-count');
  kCount.innerText = kittenList.currentKitten.count;
}

const adminButton = document.getElementById('admin-button');
adminButton.addEventListener('click', () => { displayAdmin() });

const displayAdmin = () => {
  const name = document.getElementById('name');
  const src = document.getElementById('src');
  const count = document.getElementById('count');
  const kitten = kittenList.currentKitten;
  console.log(kitten.name);
  name.value = kitten.name;
  src.value = kitten.src;
  count.value = kitten.count;
  const admin = document.getElementById('admin');
  admin.classList.remove('hidden');
}

const cancelButton = document.getElementById('admin-cancel');
cancelButton.addEventListener('click', () => {
  const admin = document.getElementById('admin');
  admin.classList.add('hidden');
});

const updateButton = document.getElementById('admin-update');
updateButton.addEventListener('click', () => { updateKitten() });

const updateKitten = () => {
  const name = document.getElementById('name').value;
  const src = document.getElementById('src').value;
  const count = document.getElementById('count').value;
  const kitten = kittenList.currentKitten;
  kitten.name = name;
  kitten.src = src;
  kitten.count = count;
  addKitten();
  loadKittens();
  const admin = document.getElementById('admin');
  admin.classList.add('hidden');
}
