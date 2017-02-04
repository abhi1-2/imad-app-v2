
console.log('Loaded!');
var element= document.getElementById('aat');
element.innerHTML="qert";
var pic=document.getElementById('er');
marginLeft=0;
var moveRight=function(){
   marginLeft=marginLeft + 15;
  pic.style.marginLeft=marginLeft + 'px';
};
pic.onclick=function(){
  var interval=setInterval(moveRight, 50);  
};
