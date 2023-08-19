let student_id = [0, 4, 2, 5]
let idx = 0
let timeout
let pressTimer
let switches = document.getElementById('switch-container').children
let L = document.getElementById('L-container').children
let MN = document.getElementById('MN-container').children
let stat = new Array(8).fill(0)


document.addEventListener('DOMContentLoaded', function(){
  for(let i=0;i<8;i++){
    id = 'MN' + String(i)
    if(i == student_id[0]){
      document.getElementById(id).style.backgroundColor = 'green'
      continue
    }
    document.getElementById(id).style.backgroundColor = 'red'
  }
})

for(let i=0;i<8;i++){
  switches[i].addEventListener('click', function(){
    if(stat[i] == 0){
      switches[i].children[0].classList.add('highlight')
      switches[i].children[1].classList.remove('highlight')
      stat[i] = 1
    }
    else{
      switches[i].children[1].classList.add('highlight')
      switches[i].children[0].classList.remove('highlight')
      stat[i] = 0
    }
  })
}

button1 = document.getElementById('B1')

button1.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    for(let i=0;i<8;i++){
      if(stat[i] == 0){
        L[i].classList.add('l-on')
      }
      else{
        L[i].classList.remove('l-on')
      }
    }
  }, 2000);

  for(let i=0;i<8;i++){
    if(stat[i] == 1){
      L[i].classList.add('l-on')
    }
    else{
      L[i].classList.remove('l-on')
    }
  }
});

button1.addEventListener('mouseup', () => {
  clearTimeout(pressTimer);
  for(let i=0;i<8;i++){
    L[i].classList.remove('l-on')
  }
});

button2 = document.getElementById('B2')
let stat2 = 0

button2.addEventListener('click', function(){
  if(stat2 == 0){
    startCount()
  }
  else{
    stopCount()
  }
})

function timedCount() {
  idx++
  idx %= 4
  for(let i=0;i<8;i++){
    if(i == student_id[idx]){
      MN[i].style.backgroundColor = 'green'
      continue
    }
    MN[i].style.backgroundColor = 'red'
  }
  timeout = setTimeout(timedCount, 500);
}


function startCount() {
  if (!stat2) {
    stat2 = 1
    timedCount();
  }
}

function stopCount() {
  clearTimeout(timeout);
  stat2 = 0;
}