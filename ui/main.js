
console.log('Loaded!');
var element= document.getElementById('aat');
element.innerHTML="qert";
var pic=document.getElementById('er');
marginleft=0;
var moveRight=function(){
  var marginleft=marginleft+15;
  pic.style.marginleft=marginleft+'px';
};
pic.onclick=function(){
  var imt=setInterval(moveRight,50);  
};
