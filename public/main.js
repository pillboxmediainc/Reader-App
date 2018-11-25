// import React from 'react';
// import readerApp from './readerApp';
// import EventEmitter from 'events';

function readerApp(string, speed) {
  let wordArray = string.split(`\n`).map(el => el.split(' '));
  console.log(wordArray);
  wordArray[wordArray.length - 1].push('&nbsp;');
  let mainDiv = document.getElementById('read-view');
  let k = 1;

  for (let i = 0; i < wordArray.length; i++) {
    for (let j = 1; j <= wordArray[i].length; j++) {
      setTimeout(() => {
        if (wordArray[i].length < 2 && wordArray[i][0] === '') {
          alert('Click Ok to read the next paragraph');
        } else {
          mainDiv.innerHTML = `${wordArray[i][j - 1]}`;
        }
      }, k * speed);
      k++;
    }
  }
}

const button = document.getElementById('button');
const textField = document.getElementById('text-input');

button.addEventListener('click', function() {
  let inputText = textField.value;
  let inputSpeed = document.getElementById('text-speed').value;

  readerApp(inputText, inputSpeed);
});
