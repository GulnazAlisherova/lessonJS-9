document.querySelector('select').addEventListener('input', function(){
  
  document.querySelectorAll('ul').forEach(
   ul => ul.classList.toggle('hidden', this.value !== ul.id)
  );
}); //rth