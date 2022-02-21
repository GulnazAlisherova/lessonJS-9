document.querySelector('select').addEventListener('input', function(){
  
  document.querySelectorAll('ul').forEach(
   ul => ul.classList.toggle('hidden', this.value !== ul.id)
  );
}); 

document.body.classList.add('hello');
document.body.classList.remove('hello');

document.body.classList.toggle('hello');
document.body.classList.toggle('hello', 4 > 4);
document.body.classList.replace('hello', 'bye');
if (document.body.classList.contains('bye')){
}



