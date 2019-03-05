let bigGreenNum = document.getElementById('bigGreen');

let i = 0

let intervalId = setInterval(function(){
  let timeoutId = setTimeout(function(){
    if (i < 1424) {
      bigGreenNum.innerText = i++;
    }
  }, 100);
});
