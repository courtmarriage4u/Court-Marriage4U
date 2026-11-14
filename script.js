(function(){
 var t=document.querySelector('.nav-toggle'),n=document.getElementById('nav');
 if(t&&n){t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o);});}
 document.querySelectorAll('form[data-netlify]').forEach(function(f){
  var box=f.parentElement,ok=box.querySelector('[data-ok]'),bad=box.querySelector('[data-bad]');
  f.addEventListener('submit',function(e){
   e.preventDefault();
   fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(f)).toString()})
   .then(function(r){if(!r.ok)throw new Error();f.hidden=true;bad.hidden=true;ok.hidden=false;})
   .catch(function(){bad.hidden=false;});
  });
 });
})();
