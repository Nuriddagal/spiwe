document.addEventListener('touchstart', handTouchStart, false);
document.addEventListener('touchmove', handTouchMove, false);
const menuBar = document.querySelector('.menu');
let x1;
let y1;
function handTouchStart(evt) {
    firstTouch = evt.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
    // console.log(x1, y1)
}
function handTouchMove(evt){
let x2 = evt.touches[0].clientX;
let y2 = evt.touches[0].clientY;
 if (!x2 && !y2){
     return false
 };
 let xDiff = x2 - x1;
 let yDiff = y2 - y1;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if(xDiff > 0){
      let tRanslate = 'translate(' + xDiff +')';
    menuBar.style.transform = tRanslate;
    ;
    console.log('right')
    };
    if(xDiff < 0){
        menuBar.style.transform = `translate(${xDiff})`;
        console.log('left')
    }
  }else{
  //   if(yDiff > -100){
  //     //   menuBar.style.opacity = yDiff;
  //     //   };
  //     //   if(yDiff < 100){
  //     //       menuBar.style.opacity = yDiff;
  //     //   }
  //     // console.log('swipe')
  }
}