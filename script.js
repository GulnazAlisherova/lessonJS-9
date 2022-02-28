// document.querySelector('select').addEventListener('input', function(){
  
//   document.querySelectorAll('ul').forEach(
//    ul => ul.classList.toggle('hidden', this.value !== ul.id)
//   );
// }); 

// document.body.classList.add('hello');
// document.body.classList.remove('hello');

// document.body.classList.toggle('hello');
// document.body.classList.toggle('hello', 4 > 4);
// document.body.classList.replace('hello', 'bye');
// if (document.body.classList.contains('bye')){
// }


let article = document.getElementById('article');
article.style.display = "none";
document.getElementById('art1').addEventListener('dblclick',function(){
  article.style.display = "block";
});
document.getElementById('art1').addEventListener('click',function(){
  article.style.display = "none";
});

let article2 = document.getElementById('article2');
article2.style.display = "none";
document.getElementById('art2').addEventListener('dblclick',function(){
  article2.style.display = "block";
});
document.getElementById('art2').addEventListener('click',function(){
  article2.style.display = "none";
});

let article3 = document.getElementById('article3');
article3.style.display = "none";
document.getElementById('art3').addEventListener('dblclick',function(){
  article3.style.display = "block";
});
document.getElementById('art3').addEventListener('click',function(){ // по  id выб
  article3.style.display = "none";
});

