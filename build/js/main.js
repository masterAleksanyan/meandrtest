window.onload = function(){
  
  ///  add outline in TAB
  let inputs = document.querySelectorAll('input, button, textarea, a, select');
  if(inputs.length){
    for(let i=0; i<inputs.length; i++){
      inputs[i].addEventListener('keyup', function(ev){
        if(ev.keyCode === 9){
          removeFocuseItems();
          this.classList.add('focuselem');
        }
      });
      inputs[i].addEventListener('blur', removeFocuseItems);
    }
  }
  function removeFocuseItems(){
    for(let i=0; i<inputs.length;i++){
      inputs[i].classList.remove('focuselem');
    }
  }
  ///  add outline in TAB
  
  
  ///  anim
  var animElem = document.querySelectorAll('.anim-element'),
      scrollT = window.pageYOffset,
      winHeight = window.innerHeight;
  addAnim();
  
  window.addEventListener('scroll', function(){
    scrollT = window.pageYOffset;
    addAnim();
  });
  
  function addAnim(){
    for(let i=0; i<animElem.length; i++){
      var childrens = animElem[i].children;
      for(let j=0; j<childrens.length; j++){
        var eachElemTop = childrens[j].offsetTop,
            eachElemHeight = childrens[j].clientHeight;
        
        if(eachElemTop - scrollT < winHeight - 30 && eachElemTop - scrollT + eachElemHeight > 50){
          childrens[j].classList.add('animate');
        }
      }
    }
  }
  
  
};









