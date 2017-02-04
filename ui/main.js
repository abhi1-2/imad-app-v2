
console.log('Loaded!');
var element= document.getElementById('aat');
element.innerHTML="qert";
var pic=document.getElementById('er');
marginLeft=0;
var moveRight=function(){
  var marginLeft=marginLeft+15;
  pic.style.marginLeft=marginLeft+'px';
};
pic.onclick=function(){
  var imt=setInterval(moveRight,50);  
};
