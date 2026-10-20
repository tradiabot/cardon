// Cuántas personas se registraron en Cardón Comunidad (opcional). Se muestra solo si hay al menos una.
(function(){
  var el=document.getElementById('com-count');if(!el||!window.fetch)return;var n=null;
  function paint(){if(n==null||n<1)return;var en=document.documentElement.lang==='en';el.textContent=en?n+(n===1?' person has':' people have')+' joined Cardón Community':n+(n===1?' persona se ha unido':' personas se han unido')+' a Cardón Comunidad';el.hidden=false}
  fetch('https://cardon-comunidad.pages.dev/v1/estado').then(function(r){return r.json()}).then(function(d){n=d.usuarios;paint()}).catch(function(){});
  [].forEach.call(document.querySelectorAll('.lang button'),function(b){b.addEventListener('click',function(){setTimeout(paint,0)})});
})();
