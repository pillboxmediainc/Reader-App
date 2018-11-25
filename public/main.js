// import React from 'react';
// import readerApp from './readerApp';

function readerApp(string, speed) {
  let wordArray = string.split(`\n`).map(el => el.split(' '));
  let mainDiv = document.getElementById('read-view');
  let k = 1;

  for (let i = 0; i < wordArray.length; i++) {
    for (let j = 1; j <= wordArray[i].length; j++) {
      setTimeout(() => {
        if (wordArray[i].length < 2) {
          alert('Click Ok to read the next paragraph');
        } else {
          mainDiv.innerHTML = `<div class="read-text">${
            wordArray[i][j - 1]
          }</div>`;
        }
      }, k * speed);
      k++;
    }
  }
}

let myString = `This is paragraph one

This is paragraph two

This is paragraph three

This is paragraph four`;

readerApp(myString, 170);
