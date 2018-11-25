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
          alert('Click OK, or press ENTER to read the next paragraph');
        } else {
          mainDiv.innerHTML = `${wordArray[i][j - 1]}`;
        }
      }, k * speed);
      k++;
    }
  }
}

const highlightedTextButton = document.getElementById('highlightedTextButton');
const textareaButton = document.getElementById('textareaButton');

const textField = document.getElementById('text-input');

highlightedTextButton.addEventListener('click', function() {
  let inputSpeed = document.getElementById('text-speed').value;

  chrome.tabs.executeScript(
    {
      code: 'window.getSelection().toString();',
    },
    function(selection) {
      readerApp(selection[0], inputSpeed);
    }
  );
});

textareaButton.addEventListener('click', function() {
  let inputText = textField.value;
  let inputSpeed = document.getElementById('text-speed').value;

  readerApp(inputText, inputSpeed);
});
