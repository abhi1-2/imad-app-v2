console.log('Loaded!');
var element= document.getElementById('aat');
element.innerHTML="qert";
var pic=document.getElementById('er');
marginLeft=0;
var moveright=function(){
   marginLeft=marginLeft + 1;
  pic.style.marginLeft=marginLeft + 'px';
};
pic.onclick=function(){
  var interval=setInterval(moveright, 50);  
};


