const readerApp = (string, speed) => {
  let array = string.split(' ');

  for (let i = 1; i <= array.length; i++) {
    setTimeout(() => {
      console.log(array[i - 1]);
    }, i * speed);
  }
};

export default readerApp;
