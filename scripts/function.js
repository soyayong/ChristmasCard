var Snowflake = (function() {
  var flakes;
  var flakesTotal = 80;
  var wind = 0;
  var mouseX;
  var mouseY;

  function Snowflake(size, x, y, vx, vy) {
    this.size = size;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.hit = false;
    this.melt = false;
    this.div = document.createElement('div');
    this.div.classList.add('snowflake');
    this.div.style.width = this.size + 'px';
    this.div.style.height = this.size + 'px';
  }
  Snowflake.prototype.move = function() {
    if(this.hit) {
      if(Math.random() > 0.995) this.melt = true;
    } else {
      this.x += this.vx + Math.min(Math.max(wind, -10), 10);
      this.y += this.vy;
    }
    // Wrap the snowflake to within the bounds of the page
    if(this.x > window.innerWidth + this.size) {
      this.x -= window.innerWidth + this.size;
    }
    if(this.x < -this.size) {
      this.x += window.innerWidth + this.size;
    }
    if(this.y > window.innerHeight + this.size) {
      this.x = Math.random() * window.innerWidth;
      this.y -= window.innerHeight + this.size * 2;
      this.melt = false;
    }
    var dx = mouseX - this.x;
    var dy = mouseY - this.y;
    this.hit = !this.melt && this.y < mouseY && dx * dx + dy * dy < 2400;
  };
  Snowflake.prototype.draw = function() {
    this.div.style.transform = this.div.style.MozTransform = this.div.style.webkitTransform = 'translate3d(' + this.x + 'px' + ',' + this.y + 'px,0)';
  };

  function update() {
    for(var i = flakes.length; i--;) {
      var flake = flakes[i];
      flake.move();
      flake.draw();
    }
    requestAnimationFrame(update);
  }
  Snowflake.init = function(container) {
    flakes = [];
    for(var i = flakesTotal; i--;) {
      var size = (Math.random() + 0.2) * 12 + 1;
      var flake = new Snowflake(size, Math.random() * window.innerWidth, Math.random() * window.innerHeight, Math.random() - 0.5, size * 0.09);
      container.appendChild(flake.div);
      flakes.push(flake);
    }
    container.onmousemove = function(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
      wind = (mouseX - window.innerWidth / 2) / window.innerWidth * 6;
    };
    container.ontouchstart = function(event) {
      mouseX = event.targetTouches[0].clientX;
      mouseY = event.targetTouches[0].clientY;
      event.preventDefault();
    };
    window.ondeviceorientation = function(event) {
      if(event) {
        wind = event.gamma / 10;
      }
    };
    update();
  };
  return Snowflake;
}());
window.onload = function() {
  setTimeout(function() {
    Snowflake.init(document.getElementById('snow'));
  }, 100);
}
var timer;

function TimerFun() {
   setTimeout(function(){
     app.is_show = 2;
   },1000)

   setTimeout(function(){
     app.is_show = 1;
   },1500)

   setTimeout(function(){
     app.is_show = 2;
   },3000)

   setTimeout(function(){
     app.is_show = 3;
   },3500)
}

function animationIn(i) {
  window.swipe_waiting = true
  setTimeout(function(){
    swipe_waiting = false
  },2000)

  switch (i) {
    case 1:
      $('.page2 h2').fadeIn();

            break;
    case 2:
      $('.page3 h2').animate({
        top: '40%',
        left: '30%'
      }, 1000);
      break;
    case 3:
      setTimeout(function() {
        $('.page4 h2').addClass('ani')
        console.log('hhh')
      }, 0)
      break;
    // case 0:
    // clearInterval(timer)
    // app._data.is_show = true;
    // break;
  }
}

function animationOut(i) {
  switch (i) {
    case 1:
      $('.page2 h2').fadeOut();
      clearInterval(timer)
      setTimeout(function(){
      app.is_show = 1;
    },1000)
      break;
    case 2:
      $('.page3 h2').animate({
        top: 0,
        left: 0
      }, 1000);
      break;
    case 3:
      $('.page4 h2').removeClass('ani')
      break;
    case 0:
      timer = setInterval(TimerFun, 4000);
      setTimeout(function(){
        app.is_show = 2
      },2000)

      setTimeout(function(){
        app.is_show = 3
      },2500)
      ;
  }
}
window.addEventListener('orientationchange', function() {
  if(window.orientation == 90 || window.orientation == -90) {
    document.body.style.backgroundColor = "#000";
    document.getElementById("app").style.display = "none";
    document.querySelector(".tip").style.display = "block";
  }else if( window.orientation == 0 ){
    document.body.style.backgroundColor = "";
    document.getElementById("app").style.display = "block";
    document.querySelector(".tip").style.display = "none";
    window.location.reload()
  }
})
