    /*==============  Back To Top Button   =============*/

$(document).ready(function(){


        const backToTop = document.querySelector('#back-to-top');
window.addEventListener('scroll',scrollFunction);
function scrollFunction()
{

if(window.pageYOffset>300)
{
  if(!backToTop.classList.contains('btnEntrance'))
  {
    backToTop.classList.remove('btnExit');
    backToTop.classList.add('btnEntrance');
    backToTop.style.display='block';
  }
}
else
{
  if(backToTop.classList.contains('btnEntrance'))
  {
    backToTop.classList.remove('btnEntrance');
    backToTop.classList.add('btnExit');
    setTimeout(function(){
      backToTop.style.display='none';
    },250);
  }
}
}
backToTop.addEventListener('click',backTop);
function backTop()
{
window.scrollTo(0,0);
}

});