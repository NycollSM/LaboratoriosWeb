let mq = window.matchMedia("(max-width: 678px)");
let nav = document.getElementById('main-menu');
let searchNav = document.getElementById('search-nav');
let button = document.getElementById('btn-mobile');
let lenguage = document.getElementById('lenguage');
function mediaQ(mq){
  if (mq.matches){
    button.style.opacity = '1';
    nav.appendChild(lenguage);
    nav.appendChild(searchNav);
    nav.style.background = 'red';
  }else{
    if (nav.length < 2){
      nav.removeChild(searchNav);
      nav.removeChild(lenguage);
    }
  }
}
mediaQ(mq);
mq.addListener(mediaQ);
