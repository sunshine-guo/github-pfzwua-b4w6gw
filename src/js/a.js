var a = document.querySelector('a');

// 然后给div添加点击事件，用计时器interval来循环，步长为5，scrollTop依次减5，时间每50ms循环一次，直到scrollTop为0清除计时器
gotop.addEventListener('click', clickHandler);
function clickHandler(e) {
  var dY = document.documentElement.scrollTop || document.body.scrollTop; //兼容
  let timer = setInterval(function () {
    var distanceY =
      document.documentElement.scrollTop || document.body.scrollTop; //兼容
    if (distanceY == a) {
      clearInterval(timer);
      return;
    }
    var speed = Math.ceil(dY / 20); //设置返回速度
    document.documentElement.scrollTop = distanceY - speed;
  }, 16);
}
