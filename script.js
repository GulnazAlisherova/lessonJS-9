document.querySelector('select').addEventListener('input', function(){
  const value = this.value;
  document.querySelectorAll('ul').forEach(function(ul){
    if (value === ul.id) {
      ul.className = '';
    }
    else {
      ul.className = 'hidden';
    } 
  });
});

function blabla() {

}
const blabla2 = () => {

}
blabla();
blabla2();