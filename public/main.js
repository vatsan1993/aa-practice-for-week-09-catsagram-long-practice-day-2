import { fetchImage } from './fetchCat.js';
export const createMainContent = () => {
  // Create h1
  const h1 = document.createElement('h1');
  h1.innerText = 'Catstagram';

  // Create img
  const img = document.createElement('img');
  img.style.margin = '20px';
  img.style.maxWidth = '750px';

  const container = document.querySelector('.container');
  container.appendChild(h1);
  container.appendChild(img);

  fetchImage();
};
