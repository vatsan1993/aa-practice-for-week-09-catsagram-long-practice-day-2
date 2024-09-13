import { fetchImage } from './fetchCat.js';
let upvoteCount = 0;
export const createSecondSection = () => {
  createSection1();
  createSection2();
};

const createNewCatButton = (section1) => {
  let newCatButton = document.createElement('input');
  newCatButton.setAttribute('type', 'button');
  newCatButton.className = 'new-cat';
  newCatButton.value = 'New Cat';
  newCatButton.addEventListener('click', newCat);
  section1.appendChild(newCatButton);
};

const createPopularityScore = (section1) => {
  let popularityScore = document.createElement('p');
  popularityScore.textContent = 'Popularity Score: 0';
  popularityScore.style.width = '100%';
  popularityScore.style.textAlign = 'center';
  popularityScore.className = 'score';
  section1.appendChild(popularityScore);
};

const createUpVote = (section1) => {
  let upVote = document.createElement('input');
  upVote.setAttribute('type', 'button');
  upVote.className = 'upvote';
  upVote.value = 'Upvote';
  upVote.addEventListener('click', handleUpvote);
  section1.appendChild(upVote);
};
const createDownVote = (section1) => {
  let downVote = document.createElement('input');
  downVote.setAttribute('type', 'button');
  downVote.className = 'downvote';
  downVote.value = 'Downvote';
  downVote.addEventListener('click', handleDownvote);
  section1.appendChild(downVote);
};
const createSection1 = () => {
  let section1 = document.createElement('section');
  createNewCatButton(section1);
  createPopularityScore(section1);
  createUpVote(section1);
  createDownVote(section1);

  section1.style.display = 'flex';
  section1.style.justifyContent = 'center';
  section1.style.margin = '10px';
  section1.style.gap = '10px';
  section1.style.flexWrap = 'wrap';

  document.body.appendChild(section1);
};

const createCommentLabel = (section2) => {
  let commentLabel = document.createElement('label');
  commentLabel.textContent = 'Comment: ';
  section2.appendChild(commentLabel);
};
const createCommentInput = (section2) => {
  let commentInput = document.createElement('input');
  commentInput.className = 'comment-input';
  commentInput.setAttribute('placeholder', 'Add a comment...');
  section2.appendChild(commentInput);
};
const createCommentSubmit = (section2) => {
  let commentSubmit = document.createElement('input');
  commentSubmit.className = 'comment-submit';
  commentSubmit.setAttribute('type', 'button');
  commentSubmit.value = 'Submit';
  commentSubmit.addEventListener('click', addComment);
  section2.appendChild(commentSubmit);
};
const createCommentBox = (section2) => {
  let commentBox = document.createElement('div');
  commentBox.className = 'comment-box';
  commentBox.style.border = '1px solid black';
  commentBox.style.width = '100%';
  commentBox.style.height = '500px';
  section2.appendChild(commentBox);
};
const createSection2 = () => {
  let section2 = document.createElement('section');
  createCommentLabel(section2);
  createCommentInput(section2);
  createCommentSubmit(section2);
  createCommentBox(section2);
  document.body.appendChild(section2);

  section2.style.display = 'flex';
  section2.style.flexWrap = 'wrap';
  section2.justifyContent = 'center';
  section2.style.textAlign = 'center';
  section2.style.gap = '10px';

  document.body.appendChild(section2);
};
let newCat = () => {
  fetchImage();
  upvoteCount = 0;
  displayUpvotes();
};

let handleUpvote = () => {
  upvoteCount++;
  displayUpvotes();
};

let handleDownvote = () => {
  upvoteCount--;
  displayUpvotes();
};

let displayUpvotes = () => {
  document.querySelector(
    '.score'
  ).textContent = `Popularity Score: ${upvoteCount}`;
};
let addComment = () => {
  let content = document.querySelector('.comment-input').value;
  let comment = document.createElement('p');
  comment.textContent = content;
  document.querySelector('.comment-box').appendChild(comment);
  document.querySelector('.comment-input').value = '';
};
