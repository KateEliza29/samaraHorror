var img = document.getElementById('logo');

var interval = window.setInterval(function(){
    if(img.style.animationName == 'none'){
        img.style.animationName = 'flicker';
    }else{
        img.style.animationName = 'none';
    }
}, 1000);


var img2 = document.getElementById('maze4');

var interval = window.setInterval(function(){
    if(img2.style.animationName == 'none'){
        img2.style.animationName = 'flicker';
    }else{
        img2.style.animationName = 'none';
    }
}, 1500);


var img3 = document.getElementById('maze5');

var interval = window.setInterval(function(){
    if(img3.style.animationName == 'none'){
        img3.style.animationName = 'flicker';
    }else{
        img3.style.animationName = 'none';
    }
}, 1200);









/*document.getElementById("logoDiv").addEventListener("click", addFlicker());


function addFlicker() {
    document.getElementById("logo").style.animationName = "flicker";
} */
    






/* document.getElementById("logo").addEventListener('animationend', () => {
    console.log('Animation ended');
    document.getElementById("logo").style.animationName = "";
    document.getElementById("logo").style.animationName = "flicker";
  }); */




//setTimeout(newQuestion, 3000);


    /*document.getElementById("logo").addEventListener("mouseenter", flickerAnim());
   
   
   
   function flickerAnim() {
       document.getElementById("logo").style.animationName = "flicker";
   }*/