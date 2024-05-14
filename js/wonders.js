/*window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}*/

window.onload = function(){
  var breakPoint = 768;
  var screenW = window.innerWidth;
  var mobile = (breakPoint>screenW);
  var currentHeight = window.innerHeight;


  //scroll to link
  var links = document.querySelectorAll('nav a');


  //define parallax images
  var parallax = document.querySelectorAll('.case-parallax');
  var imgHeights = [];
  for (i=0;i<parallax.length;i++){
    imgHeights[i]= parallax[i].parentNode.offsetHeight
  }

  function isDescendant(parent, child){
    var node = child.parentNode;
    while (node!=null){
      if(node == parent){
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }
  function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;
    var meHeight = 0;
    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition, height: meHeight };
  }
  function animateScroll(time, element){
    var scrollTo = document.querySelector(element)
    var scrollToElement = getPosition(scrollTo).y;
    var currentScroll = window.pageYOffset;
    var distance = scrollToElement - currentScroll;
    var step = (distance/(time))*10;
    let start = Date.now();
        let timer = setInterval(function() {
          currentScroll += step;
          console.log('currentScroll '+currentScroll);
          let timePassed = Date.now() - start;
          window.scrollTo(0,currentScroll);
          if (timePassed > time) clearInterval(timer);
        }, 10);
  }

  function spinMove(element){
    if(element.length>0){
      var currentScroll = window.pageYOffset;
      //var currentHeight = window.innerHeight; moving out of function to base
      for (i=0;i<element.length;i++){
        var change=0;
        var location = element[i].getBoundingClientRect();
        if (location.bottom>0 || location.top>0){
          change -= location.top*.05
          element[i].style.transform = "rotate("+change+"deg)";
        }
      }
    }
  }

  //intialize parallax-get image hieghts and data attributes
  var speed = [];
  var setTop = [];
  var location = [];
  var imgHeight = [];
  function parallaxInit(){
    for (i=0;i<parallax.length;i++){
      if (parallax[i].dataset.speed !== undefined){
        speed[i]=parallax[i].dataset.speed/100;
      }else{
        speed[i]=0.15;
      }
      if (parallax[i].dataset.top !== undefined){
        setTop[i]=parallax[i].dataset.top;
      }else{
        setTop[i]=0;
      }
      imgHeight[i] = parallax[i].parentNode.offsetHeight;
    }
  }
  parallaxInit();


  function parallaxMove(element){
      if (parallax.length>0 && !mobile){ // if parallax images are on page and not mobile
        for (i=0;i<parallax.length;i++){ // for each parallax  image
          var change=0;
          var location = parallax[i].getBoundingClientRect();
          if (location.bottom>-300 && location.top<currentHeight+300){
            var news;
            if(parallax[i].dataset.proportional){
              news = (location.top/imgHeight[i])*speed[i]*100 - parseInt(setTop[i]);
            }else{
              news = location.top*speed[i] - parseInt(setTop[i]);
            }
            change -= news;
            if(parallax[i].dataset.proportional){
              parallax[i].style.transform =  "translateY("+change +'%)';
            }else{
              parallax[i].style.transform =  "translateY("+ change +'px)';
            }
          }
        }
      }
  }


  var nav = document.getElementsByTagName('nav')[0];


  document.addEventListener('click', function(event){
      var me = event.target;
      var isChild = isDescendant(nav,me);
      if(isChild){
        if (me.tagName != "A" ){
          me = me.parentNode;
        }
        var goto = me.getAttribute('href');
        if (goto.charAt(0)== '/' ){
          goto = goto.substr(1);
        }
        if(document.querySelector(goto) != null){
          event.preventDefault();
          animateScroll(300, goto);
        }
      }
  })

  parallaxMove(parallax);
  spins = document.querySelectorAll('.spins img');
  spinMove(spins);

  document.addEventListener('scroll', function(event){
    parallaxMove(parallax)
    spinMove(spins)
  })

  //homepage hero effect
  function photoReveal(element, show){
   var me = document.querySelectorAll(element);
   var show = document.querySelector(show);
   for (i=0;i<me.length;i++){
     var moved;
     me[i].addEventListener('mouseover', function(event){
       var classes=this.className;
       classes=classes.replace("photo ","");
       var pix=show.querySelectorAll("."+classes);
       var pixes = pix.length;
       var rando = Math.floor(Math.random() * pix.length)
       moved=pix[rando];
       pix[rando].style.display="block";
       pix[rando].classList.add('moveme');
     })
     me[i].addEventListener('mousemove',function(event){
       var rect = this.getBoundingClientRect();
       var x = event.clientX;
       var y = event.clientY;
       var w = window.innerWidth;
       var h = window.innerHeight;
       var moveX = -(rect.left-x)*.5+ w*.6;
       var moveY = -(rect.top - y)*1.25+h*.2;
       var move = document.querySelector('.moveme');
       moved.style.left = moveX+ 'px';
       moved.style.top= moveY+'px';
     })
     me[i].addEventListener('mouseleave',function(event){
       var pix = document.querySelectorAll('.pop');
       for (i=0;i<pix.length;i++){
         pix[i].style.display = "none";
         pix[i].classList.remove('moveme');
       }
     })
   }
 }
  if (!mobile){
    photoReveal('span.photo', '#photos')
  }

  /* ~~~~ sticky floating elements ~~~*/
  if(!!document.getElementById("nextiva")){//for now only on nextiva page



    if (!mobile){
      var transScale = parseFloat(Math.sqrt(screenW)/40);

      var primary = document.querySelector('.main');

      primary.style.transform = 'scale('+transScale+')';
    }

    var main = document.querySelector(".straight");
    var moves = document.querySelectorAll('.move');
    var burst = document.querySelector('.burst');
    var movesR = []; //contains bounding rect for each move element
    var movesX = []; //contains css left position of each move element
    var movesY = []; //contains css top position of each move element
    var movesW = []; //contains computed width of each move element
    var movesH = []; //contains computed height of each move element
    for (i=0;i<moves.length;i++){
      movesR[i]=moves[i].getBoundingClientRect();
      movesX[i]=window.getComputedStyle(moves[i],null).getPropertyValue('left');
      movesY[i]=window.getComputedStyle(moves[i],null).getPropertyValue('top');
      movesW[i]=window.getComputedStyle(moves[i],null).getPropertyValue('width');
      movesH[i]=window.getComputedStyle(moves[i],null).getPropertyValue('height');
      moves[i].style.width = movesW[i]; //Set css width to prevent elements from growing and shrinking based on left and right position values
      moves[i].style.height = movesH[i]; //Set css height to prevent elements from growing and shrinking based on left and right position values
    }
    main.addEventListener("mousemove", (event) => {

      //get mouse position
      var mouseX = event.clientX;
      var mouseY = event.pageY;

      burst.style.transform ="rotate("+(mouseX*.01+27)+"deg)"; //rotates burst svg

      //move elements based on mouse position
      for (i=0;i<moves.length;i++){
          moves[i].style.right = "auto";//resets any right positioning in css. Left is determined at page load above.
          moves[i].style.bottom = "auto";//resents any top positiong in css. Top is determined at page load above.
          var difX = 1000000/(((mouseX - movesR[i].left - parseFloat(movesW[i])/2)**2)+1000000);//difX bell curve strength. The closer mouse is to the object stronger it pulls horizontally
          var difY = 1000000/(((mouseY - movesR[i].top - parseFloat(movesH[i])/2)**2)+1000000);//difY bell curve strength. The closer mouse is to the object stronger it pulls vertically
          //BELOW: find the center of the element and move the element based difference between mouse location and the center of the element. Multiply bell curve from dif X and Y above with move value from HTML element
          moves[i].style.left = parseFloat(movesX[i]) + (mouseX - movesR[i].left - parseFloat(movesW[i])/2)*(difX*.05*moves[i].getAttribute('data-move')) + "px";
          moves[i].style.top = parseFloat(movesY[i]) + (mouseY - movesR[i].top - parseFloat(movesH[i])/2)*(difY*.05*moves[i].getAttribute('data-move')) + "px";
      }
    })

    //~~~burst pulse animation
    var lines = document.querySelectorAll('path');
    var lwidths = [];
    for (i=0;i<lines.length;i++){
      lwidths[i]=parseFloat(lines[i].getAttribute('stroke-width'));
    }
    var t = 0;
    function pulse(){
      t=t+.5;
      for(i=0;i<lines.length;i++){
        var temp = Math.sin(lwidths[i]+(t*0.1))*2.125 + 3.375;//sin function determines maximum/minimum stroke width based on ~~!MATHS~~~
        lines[i].setAttribute('stroke-width', temp);
      }
    }
    window.setInterval(pulse,40);

    //~~~ticking clocks
    var s = 55;
    var callTime = document.getElementById('tick');
    var callTimeStr = callTime.innerHTML.split(":");
    function tick(){
      s++;
      callTimeStr[2] = s;

      if (callTimeStr[2]<10){
        callTimeStr[2]='0'+callTimeStr[2];
      }
      if (callTimeStr[2]==60){
        s=0;
        callTimeStr[2]='00';
        callTimeStr[1]=parseInt(callTimeStr[1])+1;
      }

      callTime.innerHTML = callTimeStr.join(':');
    }
    window.setInterval(tick, 1000);
  }
window.scrollTo(0, 1);
window.scrollTo(0, 0);




}
