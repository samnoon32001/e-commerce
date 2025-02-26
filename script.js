const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const fourth = document.querySelector('.fourth');

const all = document.querySelector('.all')
const sall = document.querySelector('.sall')
const tall = document.querySelector('.tall')
const fall = document.querySelector('.fall')


const firstImg = document.querySelector('.first-img')
const secondImg = document.querySelector('.second-img')
const thirdImg = document.querySelector('.third-img')
const fourthImg = document.querySelector('.fourth-img')


const card = document.querySelector('.card')

const showWithDelay = (element) => {
  setTimeout(() => {
    element.style.display = 'block';
  }, 00); // Delay of 1000ms before showing the element
};

const hideInstantly = (element) => {
  element.style.display = 'none'; // Hide immediately
};

first.addEventListener('mouseover', () => {
  card.style.width = '297px';  // Change width of .first on hover
  first.style.width = '594px'; // Change width of .second on hover
  showWithDelay(all); // Delayed show
  sall.style.display = 'none'; // Hide .first on hover
  tall.style.display = 'none'; // Hide .first on hover
  fall.style.display = 'none'; // Hide .first on hover
  firstImg.style.display = 'none'; // Hide .first on hover
});

first.addEventListener('mouseout', () => {
  card.style.width = '297px'; // Revert width of .second
  hideInstantly(all);
  firstImg.style.display = 'block'; // Hide .first on hover
});

second.addEventListener('mouseover', () => {
    card.style.width = '297px';  // Change width of .first on hover
    second.style.width = '594px'; // Change width of .second on hover
    all.style.display = 'none'; // Hide .first on hover
    tall.style.display = 'none'; // Hide .first on hover
    fall.style.display = 'none'; // Hide .first on hover
    showWithDelay(sall); // Delayed show
    firstImg.style.display = 'block'; // Hide .first on hover
    secondImg.style.display = 'none'; // Hide .first on hover
  });

  second.addEventListener('mouseout', () => {
    first.style.width = '594px';  // Revert width of .first
    second.style.width = '297px'; // Revert width of .second
    all.style.display = 'block'; // Show .first when not hovering
    firstImg.style.display = 'none'; // Hide .first on hover
    hideInstantly(sall);
    secondImg.style.display = 'block'; // Hide .first on hover
  });


  third.addEventListener('mouseover', () => {
    card.style.width = '297px';  // Change width of .first on hover
    third.style.width = '594px'; // Change width of .second on hover
    all.style.display = 'none'; // Hide .first on hover
    sall.style.display = 'none'; // Hide .first on hover
    fall.style.display = 'none'; // Hide .first on hover
    firstImg.style.display = 'block'; // Hide .first on hover
    showWithDelay(tall); // Delayed show
    thirdImg.style.display = 'none'; // Hide .first on hover
  });

  third.addEventListener('mouseout', () => {
    first.style.width = '594px';  // Revert width of .first
    third.style.width = '297px'; // Revert width of .second
    all.style.display = 'block'; // Show .first when not hovering
    firstImg.style.display = 'no  ne'; // Hide .first on hover
    hideInstantly(tall);
    thirdImg.style.display = 'block'; // Hide .first on hover
  });

  fourth.addEventListener('mouseover', () => {
    card.style.width = '297px';  // Change width of .first on hover
    fourth.style.width = '594px'; // Change width of .second on hover
    all.style.display = 'none'; // Hide .first on hover
    sall.style.display = 'none'; // Hide .first on hover
    tall.style.display = 'none'; // Hide .first on hover
    firstImg.style.display = 'block'; // Hide .first on hover
    showWithDelay(fall); // Delayed show
    fourthImg.style.display = 'none'; // Hide .first on hover
  });

  fourth.addEventListener('mouseout', () => {
    first.style.width = '594px';  // Revert width of .first
    fourth.style.width = '297px'; // Revert width of .second
    all.style.display = 'block'; // Show .first when not hovering
    firstImg.style.display = 'none'; // Hide .first on hover
    hideInstantly(fall);
    fourthImg.style.display = 'block'; // Hide .first on hover
  });