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
  ///  anim
  
  ///  verification
  var nameReg = /^[a-zA-Zа-яёА-ЯЁ ]+(([',. -][a-zA-Zа-яёА-ЯЁ ])?[a-zA-Zа-яёА-ЯЁ]*)*$/g;
  var mailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var phoneReg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
  
  var aboutForm = document.getElementById('about-form');
  var inputName = document.getElementById('input-name');
  var inputMail = document.getElementById('input-mail');
  var inputPhone = document.getElementById('input-phone');
  
  aboutForm.addEventListener('submit', function(ev){
    var n = regInput(inputName, nameReg);
    var m = regInput(inputMail, mailReg);
    var p = regInput(inputPhone, phoneReg);
    
    if(n && m && p){
      return true;
    } else {
      ev.preventDefault();
    }
  });
  
  function regInput(elem, reg){
    if(elem.value.trim().match(reg)){
      return true;
    } else {
      elem.classList.add('error');
      elem.addEventListener('input', function(){
        this.classList.remove('error');
      });
      return false;
    }
  }
  
  
};









